import { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Singlediv, Carddiv, Draws } from './style'
import Navbar from '../../components/NavBar/Navbar'
import Hero from '../../components/TournamentHeader'
import ImageRotate from '../../components/ImageRotate/ImageRotate'
import Footer from '../../components/Footer/Footer'
import InnerButton from '../../components/Button/InnerButton'
import Draw from '../../components/draw/draw'
import Loader from '../../components/ButtonLoader/ButtonLoader'
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb'
import Modal from '../../components/Modal/Modal'
import Tournament from '../../components/TounamentDetail/index'
import Particpants from '../../components/Participants/index'
import BrDraw from '../../components/BRDraw'
import { toast } from 'react-toastify'
import Join from '../../components/DisplayModal/DisplayModal'

const SingleTournament = () => {
  const [single, setSingle] = useState([1])
  const [teams, setTeams] = useState([])
  const [draws, setDraws] = useState([])
  const [brDraws, setBrDraws] = useState([])
  const [drawLoading, setDrawLoading] = useState(true)
  const [TournamentLoading, setTournamentLoading] = useState(true)
  const [joinShow, setJoinShow] = useState(false)
  const [brDrawsBack, setBrDrawsBack] = useState(false)
  const [type, setType] = useState('')
  const [amount, setAmount] = useState('')

  const modalRef = useRef()
  const modalRef2 = useRef()

  const create = () => {
    modalRef.current.open()
  }

  const close = () => {
    modalRef.current.close()
  }

  const create2 = () => {
    modalRef2.current.open()
  }

  const close2 = () => {
    modalRef2.current.close()
  }

  const { id } = useParams()

  const refresh = () => {
    const headers = {
      'Content-Type': 'application/json',
      token: localStorage.getItem('token'),
    }
    axios
      .get(`https://gamelyd.herokuapp.com/tournament/${id}`, {
        headers: headers,
      })
      .then((res) => {
        if (!res.data.hasError) {
          setTournamentLoading(false)
          setSingle(res.data.tournament)
          setType(res.data.tournament.single.Payment)
          // toast.success(res.data.message);
        } else {
          toast.error(res.data.message)
        }
      })

    axios
      .get(`https://gamelyd.herokuapp.com/tournament/participants/${id}`, {
        headers: headers,
      })
      .then((res) => {
        if (!res.data.hasError) {
          setTournamentLoading(false)
          setTeams(res.data.tournament)
          // toast.success(res.data.message);
        } else {
          toast.error(res.data.message)
        }
      })

    axios
      .get(`https://gamelyd.herokuapp.com/draws/${id}`, {
        headers: headers,
      })
      .then((res) => {
        if (!res.data.hasError) {
          if (!res.data.draws) {
            res.data.draws = []
          }
          setDrawLoading(false)
          let newDraws = []
          let tempArray = []

          for (let i = 0; i < res.data.draws.length; i++) {
            if (i === 0) {
              tempArray.push(res.data.draws[i])
            } else {
              if (res.data.draws[i].stage === res.data.draws[i - 1].stage) {
                tempArray.push(res.data.draws[i])
                if (res.data.draws.length - 1 === i) {
                  newDraws.push(tempArray)
                }
              } else {
                newDraws.push(tempArray)

                tempArray = []
                tempArray.push(res.data.draws[i])
                if (res.data.draws.length - 1 === i) {
                  newDraws.push(tempArray)
                }
              }
            }
          }
          setDraws(newDraws)
        } else {
          toast.error(res.data.message)
        }
      })
  }

  const finalDraw = () => {
    if (teams.length === 0) {
      toast.error('No participants yet')
      return
    }
    let len = draws.length
    if (len === 0) {
      if (
        window.confirm(
          `${teams.length} team(s) registered, Registration closes as soon as you make your first draw. Do you still wish to continue?`
        )
      ) {
        if (teams.length < 2) {
          toast.error("You can't draw with less than two teams")
        } else {
          drawTournament()
        }
      }
    } else {
      for (let i = 0; i < draws[draws.length - 1].length; i++) {
        if (!draws[draws.length - 1][i].Winner) {
          toast.error('some draws dont have scores')
          return
        }
      }
      drawTournament()
    }
  }

  const unRegister = async () => {
    setDrawLoading(true)
    const headers = {
      'Content-Type': 'application/json',
      token: localStorage.getItem('token'),
    }

    try {
      const res = await axios.get(
        `https://gamelyd.herokuapp.com/tournament/removeFromTournament/${localStorage.getItem(
          'id'
        )}/${id}`,
        { headers: headers }
      )
      if (!res.data.hasError) {
        setDrawLoading(false)
        toast.success(res.data.message)
        refresh()
      } else {
        setDrawLoading(false)
        toast.error(res.data.message)
      }
    } catch (error) {
      setDrawLoading(false)
      toast.error('Error please try again')
    }
  }

  const drawTournament = async () => {
    setDrawLoading(true)
    const headers = {
      'Content-Type': 'application/json',
      token: localStorage.getItem('token'),
    }

    try {
      const data = {
        TournamentId: id,
        Stage: draws.length ? draws[draws.length - 1][0].stage + 1 : 1,
      }
      const res = await axios.post(
        'https://gamelyd.herokuapp.com/draws/save',
        data,
        { headers: headers }
      )
      if (!res.data.hasError) {
        setDrawLoading(false)
        toast.success(res.data.message)
        refresh()
      } else {
        setDrawLoading(false)
        toast.error(res.data.message)
      }
    } catch (err) {
      if (err.response.status === 503) {
        toast.success('Draw generated successfully')
        setDrawLoading(false)
        refresh()
        return
      }
      toast.error('Error please try again')
      setDrawLoading(false)
    }
  }

  useEffect(() => {
    let mode
    const headers = {
      'Content-Type': 'application/json',
      token: localStorage.getItem('token'),
    }
    axios
      .get(`https://gamelyd.herokuapp.com/tournament/${id}`, {
        headers: headers,
      })
      .then((res) => {
        if (!res.data.hasError) {
          setSingle(res.data.tournament)
          console.log(res.data)
          setType(res.data.tournament.Payment)
          setAmount(res.data.tournament.RegistrationAmount)

          axios
            .get(`https://gamelyd.herokuapp.com/draws/${id}`, {
              headers: headers,
            })
            .then((res) => {
              // console.log(res.data.draws[0]);
              // console.log(typeof res.data.draws[0].brteams);
              setDrawLoading(false)
              if (mode === 'BATTLEROYALE') {
                if (!res.data.draws) {
                  res.data.draws = []
                }
                setBrDraws(res.data.draws[0])
                setBrDrawsBack(true)
                console.log(res.data.draws[0])
                console.log('weeee')
              } else {
                if (!res.data.draws) {
                  res.data.draws = []
                }
                if (!res.data.hasError) {
                  setDrawLoading(false)
                  let newDraws = []
                  let tempArray = []

                  for (let i = 0; i < res.data.draws.length; i++) {
                    if (i === 0) {
                      tempArray.push(res.data.draws[i])
                    } else {
                      if (
                        res.data.draws[i].stage === res.data.draws[i - 1].stage
                      ) {
                        tempArray.push(res.data.draws[i])
                        if (res.data.draws.length - 1 === i) {
                          newDraws.push(tempArray)
                        }
                      } else {
                        newDraws.push(tempArray)

                        tempArray = []
                        tempArray.push(res.data.draws[i])
                        if (res.data.draws.length - 1 === i) {
                          newDraws.push(tempArray)
                        }
                      }
                    }
                  }
                  setDraws(newDraws)
                  toast.success(res.data.message)
                  setDrawLoading(false)
                } else {
                  toast.error(res.data.message)
                  setDrawLoading(false)
                }
              }
            })
          mode = res.data.tournament.TournamentMode
          // setMode(res.data.tournament.TournamentMode);
          // toast.success(res.data.message);
        } else {
          toast.error(res.data.message)
          setDrawLoading(false)
        }
      })

    axios
      .get(`https://gamelyd.herokuapp.com/tournament/participants/${id}`, {
        headers: headers,
      })
      .then((res) => {
        if (!res.data.hasError) {
          setTournamentLoading(false)
          setTeams(res.data.tournament)
          // toast.success(res.data.message);
        } else {
          toast.error(res.data.message)
          setDrawLoading(false)
        }
      })
  }, [id])

  return (
    <div>
      {drawLoading ? <Loader /> : ''}
      <Navbar message='jh' />
      <Hero />

      <Modal ref={modalRef}>
        <button onClick={close} className='close'>
          X
        </button>
        <Tournament single={single} />
      </Modal>

      <Modal ref={modalRef2}>
        <button onClick={close2} className='close'>
          X
        </button>
        <Particpants teams={teams} />
      </Modal>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          margin: '50px',
        }}
      >
        <div style={{ margin: '5px' }} onClick={create}>
          <InnerButton>View Details</InnerButton>
        </div>

        <div style={{ margin: '5px' }} onClick={create2}>
          <InnerButton>Teams</InnerButton>
        </div>
        <div style={{ margin: '5px' }} onClick={() => setJoinShow(!joinShow)}>
          <InnerButton>Register</InnerButton>
        </div>
        <div style={{ margin: '5px' }} onClick={unRegister}>
          <InnerButton>Unregister</InnerButton>
        </div>
        {single.User_id === localStorage.getItem('id') && (
          <div style={{ margin: '5px' }} onClick={finalDraw}>
            <InnerButton>Draw</InnerButton>
          </div>
        )}
      </div>

      {joinShow && (
        <div>
          <Join
            payment={type}
            close={() => setJoinShow(false)}
            id={id}
            amount={amount}
          />
        </div>
      )}
      <Draws>
        {draws.length === 0 && brDrawsBack === false && (
          <div className='noDraw'>
            Draws has not been made for this tournament check back later
            <span>
              <DoNotDisturbIcon sx={{ fontSize: 200 }} />
            </span>
          </div>
        )}
        {brDrawsBack === true && (
          <>
            <BrDraw id={single.User_id} draws={brDraws} />
          </>
        )}

        {draws.map((singleDraw, index) => (
          <div key={index}>
            <div
              style={{
                fontSize: '25px',
                fontWeight: '600',
                textAlign: 'center',
                marginTop: '30px',
              }}
            >
              {singleDraw.length < 2
                ? 'FINALS'
                : singleDraw.length < 3
                ? 'SEMI FINALS'
                : singleDraw.length < 5
                ? 'QUATER FINALS'
                : singleDraw.length < 9
                ? 'ROUND OF SIXTEEN'
                : `Stage  ${index + 1}`}
            </div>
            {singleDraw.map((draw, i) => (
              <div key={i}>
                <Draw id={single.User_id} draw={draw} />
              </div>
            ))}
          </div>
        ))}
      </Draws>

      <Carddiv>
        <div className='imagerotate'>
          <div className='title2'>Sponsors</div>
          <ImageRotate />
        </div>
      </Carddiv>
      <Footer />
    </div>
  )
}

export default SingleTournament
