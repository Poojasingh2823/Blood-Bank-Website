import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-felx flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          <h3>Manage Blood Bank App </h3>
          <hr />
          <p>
          The issue of Clinics in Laboratory Medicine includes articles on a variety of topics in blood banking 
          in transfusion medicine. Knowledge regarding infectious risk continually influences the donor screening 
          process and adaptation of criteria for potential donors as new information becomes available. 
          Introduction of pathogen reduction technologies now plays a large role in risk mitigation of transfusion-
          transmitted infections for platelet products. Recipient testing has evolved to help optimize transfusion 
          safety, including alternate workflows for drugs that can interfere with routine blood bank testing methods. 
          Transfusion indications for red blood cells, platelets, plasma, and granulocytes continue to evolve. 
          Whole blood transfusion declined in utilization over time with the advent of individual component therapy, 
          but it has recently shown promise in trauma settings. Risk mitigation of adverse events remains a critical 
          component of transfusion medicine clinical practice, both in blood banks and by the clinicians who utilize 
          blood products. Education of trainees in transfusion medicine and other specialties can further the field in 
          collaborative ways across disciplines as trainees advance and establish their own practices. 
          Advances in technology and clinical informatics can continue to improve transfusion medicine practices and safety.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;