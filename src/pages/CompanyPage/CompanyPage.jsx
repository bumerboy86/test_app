import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useLazyGetCompanyByIdQuery } from "../../store/services/company_api";
import styles from "./CompanyPage.module.css";
import { ButtonBrandOutline } from "../../components/Buttons/ButtonBrandOutline";

export const CompanyPage = () => {
  const { id } = useParams();
  const [getCompanyById, { data: companyData }] = useLazyGetCompanyByIdQuery();

  useEffect(() => {
    getCompanyById(id);
  }, [id]);

  useEffect(() => {
    if (companyData) {
      console.log("Company data:", companyData);
    }
  }, [companyData]);
  return (
    <div className={styles.company}>
      <section className={styles.company_title}>
        <h4>Eternal Rest Funeral Home</h4>
        <div>
          <button>1we1w</button> <button>2eq2</button>
        </div>
      </section>
      <section className={styles.company_details}>
        <div className={styles.company_function}>
          <p className={styles.company_title}>Company Details</p>
          <ButtonBrandOutline cont={"edit"} />
        </div>
        <div className={styles.company_details_item}>
          <h3>Company Address</h3>
          <p>{companyData?.address}</p>
        </div>
        <div className={styles.company_details_item}>
          <h3>Company Phone</h3>
          <p>{companyData?.phone}</p>
        </div>
        <div className={styles.company_details_item}>
          <h3>Company Email</h3>
          <p>{companyData?.email}</p>
        </div>
      </section>
    </div>
  );
};
