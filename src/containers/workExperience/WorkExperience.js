import React, {useContext} from "react";
import "./WorkExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import {workExperiences} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function WorkExperience() {
  const {isDark} = useContext(StyleContext);

  if (workExperiences.display) {
    // Track companies already shown
    const shownCompanies = new Set();

    return (
      <div id="experience">
        <Fade bottom duration={1000} distance="20px">
          <div className="experience-container" id="workExperience">
            <div>
              <h1 className="experience-heading">Experiences</h1>
              <div className="experience-cards-div">
                {workExperiences.experience.map((card, i) => {
                  const showCompanyInfo = !shownCompanies.has(card.company);
                  if (showCompanyInfo) {
                    shownCompanies.add(card.company);
                  }
                  return (
                    <ExperienceCard
                      key={i}
                      isDark={isDark}
                      showCompanyInfo={showCompanyInfo}
                      cardInfo={{
                        company: showCompanyInfo ? card.company : "",
                        desc: card.desc,
                        date: card.date,
                        companylogo: showCompanyInfo ? card.companylogo : null,
                        role: card.role,
                        descBullets: card.descBullets
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }

  return null;
}
