import React from 'react';
import ListIcon from './ListIcon';

interface EducationData {
  position: string;
  time: string;
  address: string;
  work: string;
}

const Details: React.FC<EducationData> = ({
  position,
  time,
  address,
  work,
}) => {
  return (
    <li className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between">
      <ListIcon />
      <div>
        <h3 className="capitalize font-bold text-2xl">{position}</h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {address}
        </span>
        <p className="font-medium w-full">{work}</p>
      </div>
    </li>
  );
};

const Education: React.FC = () => {
  const educations: EducationData[] = [
    {
      position: "Frontend developer",
      time: "2023-2024",
      address: "Stockholm, Sweden",
      work: "A lot of things"
    },
    {
      position: "Frontend developer",
      time: "2024-2026",
      address: "Stockholm, Sweden",
      work: "A lot of things"
    }
  ];

  return (
    <div className="my-32">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">Education</h2>
      <div className="w-[75%] mx-auto relative">
        <div className="absolute left-8 top-0 w-[4px] h-full bg-dark origin-top"></div>

        <ul className="w-full flex flex-col items-start justify-between ml-4">
          {educations.map((edu, index) => (
            <Details
              key={index}
              position={edu.position}
              time={edu.time}
              address={edu.address}
              work={edu.work}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Education;
