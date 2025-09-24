import React from 'react';
import ListIcon from './ListIcon';

interface ExperienceData {
  position: string;
  company: string;
  companyLink: string;
  time: string;
  address: string;
  work: string;
}

const Details: React.FC<ExperienceData> = ({ position, company, companyLink, time, address, work }) => {
  return (
    <li className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between">
      <ListIcon />
      <div>
        <h3 className="capitalize font-bold text-2xl">
          {position}
          <a className="text-primary capitalize" href={companyLink} target="_blank">
            {' '}
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {address}
        </span>
        <p className="font-medium w-full">{work}</p>
      </div>
    </li>
  );
};

const Experience: React.FC = () => {
  const experiences: ExperienceData[] = [
    {
      position: "Frontend developer",
      company: "Enity Bank Group AB",
      companyLink: "https://www.enity.com/",
      time: "2023-2024",
      address: "Stockholm, Sweden",
      work: "A lot of things"
    },
    {
      position: "Frontend developer",
      company: "Xylem",
      companyLink: "https://www.xylem.com/sv-se/",
      time: "2023-2024",
      address: "Stockholm, Sweden",
      work: "A lot of things"
    },
    {
      position: "Frontend developer",
      company: "Bigspin AB",
      companyLink: "www.gaston.com",
      time: "2023-2024",
      address: "Stockholm, Sweden",
      work: "A lot of things"
    },
    {
      position: "System developer",
      company: "Handelsbanken",
      companyLink: "www.gaston.com",
      time: "2023-2024",
      address: "Stockholm, Sweden",
      work: "A lot of things"
    },
    {
      position: "Frontend developer",
      company: "Bigspin",
      companyLink: "www.gaston.com",
      time: "2024-2026",
      address: "Stockholm, Sweden",
      work: "A lot of things"
    }
  ];

  return (
    <div className="my-32">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">Experience</h2>
      <div className="w-[75%] mx-auto relative">
        <div className="absolute left-8 top-0 w-[4px] h-full bg-dark origin-top"></div>

        <ul className="w-full flex flex-col items-start justify-between ml-4">
          {experiences.map((exp, index) => (
            <Details
              key={index}
              position={exp.position}
              company={exp.company}
              companyLink={exp.companyLink}
              time={exp.time}
              address={exp.address}
              work={exp.work}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
