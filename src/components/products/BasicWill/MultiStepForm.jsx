import React from "react";
import { useForm, useStep } from "react-hooks-helper";

import ReqDetails from "./requester";
import WillOwnerDetails from "./willowner";
import ExecutoerDetails from "./executoerDetails";
import AdditionalInfo from "./AddInfo";
import Checkout from "./payment";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useHistory } from "react-router-dom";

const steps = [
  { id: "requester" },
  { id: "will" },
  { id: "Executor" },
  { id: "additional" },
  { id: "review" },
];

const defaultData = {
  requesterTitle: "",
  requesterFname: "",
  requesterMname: "",
  requesterLname: "",
  requesterAdd: "",
  requesterEmail: "",
  requesterPhNo: "",
  requesterAddLine1: "",
  requesterAddLine2: "",
  requesterTown: "",
  requesterCountry: "",
  requesterPostCode: "",
  promotionCode: "",
  willOwnerTitle: "",
  willOwnerFname: "",
  willOwnerSurname: "",
  willOwnerEmail: "",
  willOwnerMname: "",
  willOwnerDob: "",
  willOwnerGender: "",
  willOwnerAddLine1: "",
  willOwnerAddLine2: "",
  willOwnerCity: "",
  willOwnerCountry: "",
  willOwnerUK: "",
  willOwnerPostcode: "",
  willOwnerPhNo: "",
  dateOfWill: "",
  storedWillAdd: "",
  additionalIns: "",
  willReminderFr: "",
  willSource: "",
  createdBy: "",
  willRefNo: 0,
  willStorageRefNo: 0,
};

const MultiStepForm = ({ images, user }) => {
  let history = useHistory();
  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({ initialStep: 0, steps });
  const { id } = step;

  const props = { formData, setForm, navigation };

  switch (id) {
    case "requester":
      return (
        <div className="global-container" style={{backgroundAttachment:"fixed"}}>
        <div className="back-button">
          <Link onClick={history.goBack}><FaArrowLeft /></Link>
        </div><ReqDetails {...props} user={user} />
        </div>
        );
    case "will":
      return (
        <div className="global-container" style={{backgroundAttachment:"fixed"}}>
        <div className="back-button">
          <Link onClick={history.goBack}><FaArrowLeft /></Link>
        </div><WillOwnerDetails {...props} />
        </div>
        );
    case "Executor":
    return (
      <div className="global-container" style={{backgroundAttachment:"fixed"}}>
      <div className="back-button">
        <Link onClick={history.goBack}><FaArrowLeft /></Link>
      </div><ExecutoerDetails {...props} />
      </div>
      );
    case "additional":
      return (
        <div className="global-container" style={{backgroundAttachment:"fixed"}}>
        <div className="back-button">
          <Link onClick={history.goBack}><FaArrowLeft /></Link>
        </div><AdditionalInfo {...props} user={user} />
        </div>
        );
    case "review":
      return (
        <div className="global-container" style={{backgroundAttachment:"fixed"}}>
        <div className="back-button">
          <Link onClick={history.goBack}><FaArrowLeft /></Link>
        </div><Checkout {...props} />
        </div>
        );

    default:
      return null;
  }
};

export default MultiStepForm;
