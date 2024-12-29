import { FaReact, FaPython, FaNodeJs, FaSass, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiSpringboot, SiMysql, SiTypescript, SiExpress, SiMongodb, SiSqlite, SiChartdotjs, SiNextdotjs,SiVite,SiAxios,SiThymeleaf} from 'react-icons/si';
import { DiJavascript } from 'react-icons/di';

export const techConfig = {
  'React.js': {
    color: '#61DAFB',
    icon: FaReact,
    background: 'rgba(97, 218, 251, 0.1)'
  },
  'React Native': {
    color: '#269574',
    icon: FaReact,
    background: 'rgba(38, 149, 116, 0.1)'
  },
  SQLite: {
    color: '#003B57',
    icon: SiSqlite,
    background: 'rgba(0, 59, 87, 0.1)'
  },
  Python: {
    color: '#3776AB',
    icon: FaPython,
    background: 'rgba(55, 118, 171, 0.1)'
  },
  'Chart.js': {
    color: '#FF6384',
    icon: SiChartdotjs,
    background: 'rgba(255, 99, 132, 0.1)'
  },
  'Node.js': {
    color: '#339933',
    icon: FaNodeJs,
    background: 'rgba(51, 153, 51, 0.1)'
  },
  Express: {
    color: '#000000',
    icon: SiExpress,
    background: 'rgba(0, 0, 0, 0.1)'
  },
  MongoDB: {
    color: '#47A248',
    icon: SiMongodb,
    background: 'rgba(71, 162, 72, 0.1)'
  },
  'Next.js': {
    color: '#000000',
    icon: SiNextdotjs,
    background: 'rgba(0, 0, 0, 0.1)'
  },
  TypeScript: {
    color: '#3178C6',
    icon: SiTypescript,
    background: 'rgba(49, 120, 198, 0.1)'
  },
  Javascript: {
    color: '#f0dc1c',
    icon: DiJavascript,
    background: 'rgba(240, 220, 28, 0.1)'
  },
  Sass: {
    color: '#CC6699',
    icon: FaSass,
    background: 'rgba(204, 102, 153, 0.1)'
  },
  Css: {
    color: '#1572B6',
    icon: FaCss3Alt,
    background: 'rgba(21, 114, 182, 0.1)'
  },
  Html: {
    color: '#E34F26',
    icon: FaHtml5,
    background: 'rgba(227, 79, 38, 0.1)'
  },
  SpringBoot: {
    color: '#6DB33F',
    icon: SiSpringboot,
    background: 'rgba(109, 179, 63, 0.1)'
  },
  MySql: {
    color: '#4479A1',
    icon: SiMysql,
    background: 'rgba(68, 121, 161, 0.1)'
  },
  Thymeleaf: {
    color: '#005F0F',
    icon: SiThymeleaf ,
    background: 'rgba(0, 95, 15, 0.1)'
  },
  Vite:{
    color: '#646CFF',
    icon: SiVite ,
    background: 'rgba(100, 108, 255, 0.1)'
  },
  Axios:{
    color: '#61DAFB',
    icon: SiAxios,
    background: 'rgba(97, 218, 251, 0.1)'
  }
};

export const getTagStyles = (tag) => {
  const config = techConfig[tag] || {
    color: '#718096',
    background: 'rgba(113, 128, 150, 0.1)',
    icon: null
  };
  
  return {
    color: config.color,
    background: config.background,
    Icon: config.icon
  };
};