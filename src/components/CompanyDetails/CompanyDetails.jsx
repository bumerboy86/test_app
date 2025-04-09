import React from "react";
import styles from "./CompanyDetails.module.css";
import { ButtonBrandOutline } from "../Buttons/ButtonBrandOutline";

export const CompanyDetails = ({ companyData }) => {
  return (
    <section className={styles.company_details}>
      <div className={styles.company_details_functional}>
        <p>Company Details</p>
        <ButtonBrandOutline cont={"edit"} />
      </div>
      <div className={styles.company_details_item}>
        <h3>Agreement:</h3>
        <p>{companyData?.contract.no}</p>
        <p>{companyData?.contract.issue_date}</p>
      </div>
      <div className={styles.company_details_item}>
        <h3>Business entity:</h3>
        <p>{companyData?.businessEntity}</p>
      </div>
      <div className={styles.company_details_item}>
        <h3>Company type:</h3>
        <p>{companyData?.type.join(", ")}</p>
      </div>
    </section>
  );
};
