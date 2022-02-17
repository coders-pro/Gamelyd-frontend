import { motion } from "framer-motion";
import Card from "../../components/Card/Card";
import { Div } from "./Style";

const More = ({ more }) => {
  return (
    <Div>
      <motion.div
        layout
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        // transition={{ duration: 1 }}
      >
        <Card data={more} tournamentId={more.tournamentid} />
      </motion.div>
    </Div>
  );
};

export default More;
