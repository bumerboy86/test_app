import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useLazyGetCompanyByIdQuery } from "../../store/services/company_api";
import styles from "./CompanyPage.module.css";
// import { ButtonBrandOutline } from "../../components/Buttons/ButtonBrandOutline";
import { CompanyDetails } from "../../components/CompanyDetails/CompanyDetails";

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
    <>
      {companyData ? (
        <div className={styles.company}>
          <section className={styles.company_title}>
            <h4>{companyData?.name}</h4>
            <div>
              <button>1we1w</button> <button>2eq2</button>
            </div>
          </section>
          <CompanyDetails companyData={companyData} />
        </div>
      ) : (
        <p>По Вашему запросу компания не найдейдена</p>
      )}
    </>
  );
};
