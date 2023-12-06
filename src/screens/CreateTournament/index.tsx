import React, { useEffect, useRef, useState } from "react";
import { Div } from "./style";
import TourSliderCard from "../../components/TourSliderSelect";
import Navbar from "../../components/NavBar/Navbar";
import Input from "../../components/Input";
import Select from "../../components/Select";
import TextArea from "../../components/TextArea";
import InnerButton from "../../components/Button";
import girl from "../../assets/images/girl.png";
import { toast } from "react-toastify";
import Loader from "../../components/Loader";
import useForceUpdate from "../../hooks/forceUpdate";
import {
  myData,
  SelectedValues,
  DataItem,
  platformData,
  paymentChannelData,
  PaystackButtonProps,
} from "./data";
import { useApi } from "../../api";
import { useNavigate } from "react-router-dom";
import { PaystackButton } from "react-paystack";
import { User } from "../../User";

const CreateTournament = () => {
  const navigate = useNavigate();
  const { state, isPending, error, call, clearState } = useApi({
    route: `tournament/save`,
    method: "POST",
    callback: (res: any) => {
      if (res.hasError) {
        toast.error(res.message);
      } else {
        navigate(`/tournament/view/${res.data.ID}`);
      }
    },
  });
  const [isButtonEnabled, setIsButtonEnabled] = useState(true);
  const forceUpdate = useForceUpdate();
  const [mode, setMode] = useState<string>("select");
  const [active, setActive] = useState<number>(0);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [selectedValues, setSelectedValues] = useState<SelectedValues>({
    TournamentType: "",
    TournamentMode: "",
    Shuffle: "",
    Team: "",
    Payment: "",
    Icon: "",
  });
  const [data, setData] = useState<DataItem[]>(myData);
  const [activeData, setActiveData] = useState<DataItem>(data[0]);
  const [bg, setBg] = useState<string>(data[0].data[0].image);

  const [competitionName, setCompetitionName] = useState<string>("");
  const [noOfParticipants, setNoOfParticipants] = useState<number>(2);
  const [link, setLink] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [plartform, setPlartform] = useState<string>(platformData[0].value);
  const [amount, setAmount] = useState<number>(0);
  const [registrationAmount, setRegistrationAmount] = useState<number>(0);
  const [paymentChannel, setPaymentChannel] = useState<string>(
    paymentChannelData[0].value
  );
  const [description, setDescription] = useState<string>("");
  const [gameName, setGameName] = useState<string>("");
  const [isPaid, setIspaid] = useState<boolean>(false);
  const [refNum, setRefNum] = useState<string>("not set");
  const userInfo = User().get();

  const chose = (index: number) => {
    const newData = [...data];
    newData[active].selectedValue = index;

    const newSelectedValues: SelectedValues = {
      ...selectedValues,
    };
    newSelectedValues[activeData.modelName] =
      activeData.data[activeData.selectedValue as number].value;

    if (activeData.name === "Tournament Icon") {
      setBg(activeData.data[index].image);
      newSelectedValues[activeData.modelName] =
        activeData.data[activeData.selectedValue as number].image;
    }

    setData(newData);
    setSelectedValues(newSelectedValues);
    forceUpdate();
  };

  const checkValues = () => {
    const payload: any = {
      ...selectedValues,
      Name: competitionName,
      GameName: gameName,
      TournamentSize: noOfParticipants,
      Link: link,
      Date: date,
      IsPaid: isPaid,
      RefNumber: refNum,
      PaymentChannel: paymentChannel,
      Amount: +amount,
      RegistrationAmount: +registrationAmount,
      Platform: plartform,
      Note: description,
    };
    const emptyValueKeys = Object.keys(payload).filter(
      (key) => (payload[key] as any) === ""
    );

    const stringWithSpaces = emptyValueKeys.map((keys) => keys).join(", ");
    toast.error(`All inputs are required (${stringWithSpaces} )`);
  };

  const submit = () => {
    const payload: any = {
      ...selectedValues,
      Name: competitionName,
      GameName: gameName,
      TournamentSize: noOfParticipants,
      Link: link,
      Date: date,
      IsPaid: isPaid,
      RefNumber: refNum,
      PaymentChannel: paymentChannel,
      Amount: +amount,
      RegistrationAmount: +registrationAmount,
      Platform: plartform,
      Note: description,
    };
    const emptyValueKeys = Object.keys(payload).filter(
      (key) => (payload[key] as any) === ""
    );
    const stringWithSpaces = emptyValueKeys.map((keys) => keys).join(", ");

    if (emptyValueKeys.length > 0) {
      toast.error(`All inputs are required (${stringWithSpaces} )`);
    } else {
      call({
        body: payload,
      });
    }
    console.log(payload);
  };

  const config: PaystackButtonProps = {
    reference: new Date().getTime().toString(),
    email: userInfo?.user?.email,
    amount: amount * 100,
    publicKey: "pk_test_465b4f76e2438127c64e2055370bc5f1e10b65db",
  };

  const handlePaystackSuccessAction = (reference: any) => {
    setRefNum(reference.trxref);
    const payload: any = {
      ...selectedValues,
      Name: competitionName,
      GameName: gameName,
      TournamentSize: noOfParticipants,
      Link: link,
      Date: date,
      IsPaid: isPaid,
      RefNumber: reference.trxref,
      PaymentChannel: paymentChannel,
      Amount: +amount,
      RegistrationAmount: +registrationAmount,
      Platform: plartform,
      Note: description,
    };

    call({
      body: payload,
    });
    console.log(payload);
  };

  const handlePaystackCloseAction = () => {
    toast.info("You just exited payment screen");
  };

  const componentProps = {
    ...config,
    text: "Pay Now",
    onSuccess: (reference: any) => handlePaystackSuccessAction(reference),
    onClose: handlePaystackCloseAction,
  };

  useEffect(() => {
    console.log("chnage");

    const data: any = {
      Name: competitionName,
      GameName: gameName,
      TournamentSize: noOfParticipants,
      Link: link,
      Date: date,
      IsPaid: isPaid,
      RefNumber: refNum,
      PaymentChannel: paymentChannel,
      Amount: amount,
      RegistrationAmount: registrationAmount,
      Platform: plartform,
      Note: description,
    };
    const emptyValueKeys = Object.keys(data).filter(
      (key) => (data[key] as any) === ""
    );

    if (emptyValueKeys.length === 0) {
      setIsButtonEnabled(true);
    } else {
      setIsButtonEnabled(false);
    }
  }, [
    competitionName,
    gameName,
    noOfParticipants,
    link,
    date,
    isPaid,
    refNum,
    paymentChannel,
    amount,
    registrationAmount,
    plartform,
    description,
  ]);

  return (
    <>
      <Navbar message="jh" />
      {isPending && <Loader message="saving tournament" />}
      <Div background={bg}>
        <div className="overlay">
          {mode === "select" && (
            <>
              <div className="top">
                <div className="tag">New Tournament</div>
                <div className="back"></div>
              </div>
              <div className="bottom">
                <div className="modes">
                  {data.map((item: any, index: number) => (
                    <div
                      key={index}
                      className={`mode ${active === index ? "active" : null}`}
                      onClick={() => {
                        setActive(index);
                        setActiveData(data[index]);
                        chose(activeIndex);

                        // console.log("index", data[index], index);
                      }}
                    >
                      {item.name}
                    </div>
                  ))}
                </div>
                <TourSliderCard
                  data={activeData}
                  onSelect={(index: number, name: string) => {
                    chose(index);
                    if (active + 1 < data.length) {
                      setActiveData(data[active + 1]);
                      setActive((prev) => prev + 1);
                    }
                  }}
                  onSoftSelect={(index: number) => chose(index)}
                  setActiveIndex={(index: number) => setActiveIndex(index)}
                />
              </div>
              <div className="button">
                <InnerButton
                  onClick={() => {
                    const emptyValueKeys = Object.keys(selectedValues).filter(
                      (key) => (selectedValues[key] as any) === ""
                    );
                    const stringWithSpaces = emptyValueKeys
                      .map((keys) => keys)
                      .join(", ");
                    if (emptyValueKeys.length > 0) {
                      toast.error(
                        `Make sure you selected these values (${stringWithSpaces} )`
                      );
                    } else {
                      setMode("form");
                    }
                  }}
                >
                  Next
                </InnerButton>
              </div>
            </>
          )}
          {mode === "form" && (
            <div className="formData">
              <div className="back" onClick={() => setMode("select")}>
                Back
              </div>
              <Input
                type="text"
                value={competitionName}
                onChange={(e: any) => setCompetitionName(e.target.value)}
                label="Competition Name"
              />
              <Input
                type="text"
                value={gameName}
                onChange={(e: any) => setGameName(e.target.value)}
                label="Game Name"
              />
              <Input
                type="number"
                value={noOfParticipants}
                onChange={(e: any) => setNoOfParticipants(e.target.value)}
                label="No Of Participants"
              />
              <Input
                type="text"
                value={link}
                onChange={(e: any) => setLink(e.target.value)}
                label="Link"
              />
              <Input
                type="date"
                value={date}
                onChange={(e: any) => {
                  setDate(e.target.value);
                }}
                label="Start Date"
              />
              <Select
                data={platformData}
                value={paymentChannel}
                onChange={(e: any) => setPaymentChannel(e.target.value)}
                label="Plartform"
              />
              {console.log("selectedValues", selectedValues)}
              {selectedValues.Payment !== "FREE" && (
                <>
                  <Input
                    type="number"
                    value={amount}
                    onChange={(e: any) => setAmount(e.target.value)}
                    label="Amount"
                  />
                  {selectedValues.Payment === "PAID" && (
                    <Input
                      type="number"
                      value={registrationAmount}
                      onChange={(e: any) =>
                        setRegistrationAmount(e.target.value)
                      }
                      label="Registration Amount"
                    />
                  )}
                </>
              )}

              <Select
                data={paymentChannelData}
                value={paymentChannel}
                onChange={(e: any) => setPaymentChannel(e.target.value)}
                label="Payment Channel"
              />

              <TextArea
                type="number"
                value={description}
                onChange={(e: any) => setDescription(e.target.value)}
                label=""
                placeholder="message, rules or instructions for participants"
                row={5}
              />

              <div className="space"></div>
              <div className="space"></div>
              {selectedValues.Payment === "FREE" ? (
                <InnerButton onClick={() => submit()}>
                  Create Tournament
                </InnerButton>
              ) : (
                <>
                  {isButtonEnabled ? (
                    <PaystackButton className="btn" {...componentProps} />
                  ) : (
                    <InnerButton onClick={checkValues}>Pay Now</InnerButton>
                  )}
                </>
              )}
            </div>
          )}
        </div>
      </Div>
    </>
  );
};

export default CreateTournament;
