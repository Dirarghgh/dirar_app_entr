import React from 'react';
import { AiOutlineDashboard } from 'react-icons/ai';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { AiOutlineAppstore   } from 'react-icons/ai';






const customerGridStatus = (props) => (
  <div className="flex gap-2 justify-center items-center text-gray-700 capitalize">
    <p style={{ background: '#F0C43C' }} className="rounded-full h-3 w-3" />
    <p>{props.nom}</p>
  </div>
);







export const GestiondesconcessionsGrid = [
  {
    field: 'ID',
    headerText: 'ID CONCESSION',
    width: '130',
    textAlign: 'Center',
    
  },
 
  { field: 'nom',
    headerText: 'NOM',
    width: '130',
    
    textAlign: 'Center',
    template: customerGridStatus },
                
    { 
      field: 'date',
      headerText: 'DATE DEXPLOTATION',
      width: '200',
      textAlign: 'Center',
      template: (data) => {
        const [startDate, endDate] = data.date.split('->');
        return `${startDate.trim()} ➔ ${endDate.trim()}`;
      },
    },
 
    { 
      field: 'datet',
      headerText: 'DATE DINVESTISSEMENT',
      width: '200',
      textAlign: 'Center',
      template: (data) => {
        const [startDate, endDate] = data.datet.split('->');
        return `${startDate.trim()} ➔ ${endDate.trim()}`;
      },
    },

{ field: 'taux',
headerText: 'TAUX',
width: '120',
textAlign: 'Center',

},
{ field: 'nb',
headerText: 'NB INVESTISSE URS',
width: '169',
textAlign: 'Center',

},
{
  field: 'but',
  headerText: 'BUT',
  width: '120',
  textAlign: 'Center',
  // Use ProgressBar component for the "BUT" field
},
{ field: 'action',
headerText: 'ACTION',
width: '120',
textAlign: 'Center',

},


  

];












export const Gestiondesconcessionsdata = [
  {
    ID: '#5089',
    nom: 'Investissement',
    date: '14 juin 2024 ->29 juillet 2026',
    datet: '14 juin 2024 ->29 juillet 2026',
    taux: '7 OZT/g',
    nb: 1200,
    but: 50, // Example progress value for "BUT" field
    action: 'Active'
  },
];






export const links = [
  {
    links: [
      {
        name: 'Dashboard',
        icon: <AiOutlineAppstore   />
        
      },
    ],
  },
  {
    title: 'Application',
    links: [
      {
        name: 'Users',
        iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b885a96f25e2c48461207e71d82d06682bab249df946773eeedfb9aa9675b042?apiKey=16edf050187a4ba683d958ed97898d7e&',
       
      },
      {
        name: 'Transcations',
        iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/00aba6b40ba80dcbf524c3cf44a511e44befe2a57b5caf55113ed166da12a787?apiKey=16edf050187a4ba683d958ed97898d7e&',
      },
      {
        name: 'KYC doucements',
        iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ad5d3940d420e67e695423c6dbd0fa094d90efc6a6533782e5a66ef89fd809e8?apiKey=16edf050187a4ba683d958ed97898d7e&',
      },
      
      {
        name: 'Tiquets',
        iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/8f12776567ef0f9c3324a4a34a2815ae435a6bc30279ac983d34ef7b16ffd815?apiKey=16edf050187a4ba683d958ed97898d7e&',
      },
      {
        name: 'Notifications',
        iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7ddbcb407826a95b625f7c2c1f92ab4339855cd894a22c71d643ab63407c583b?apiKey=16edf050187a4ba683d958ed97898d7e&',
        notificationCount: 48,
      },
      {
        name: 'Gestion des concessions',
        iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/91d4d1ea1012ecb21480b32470054323f404e2971b3c3bedf84f69ddb8106d60?apiKey=16edf050187a4ba683d958ed97898d7e&',
        to: '/Gestion'
      },
      {
        name: 'Parameters',
        iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/91d4d1ea1012ecb21480b32470054323f404e2971b3c3bedf84f69ddb8106d60?apiKey=16edf050187a4ba683d958ed97898d7e&',
      },
    ],
  },
];


export const userProfileData = [
  {
  
    title: 'My Profile',
    desc: 'Account Settings',
   
  },
 
];
