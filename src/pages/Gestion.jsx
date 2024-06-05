import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter, Pager } from '@syncfusion/ej2-react-grids';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Header } from '../components';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';

import './styles.css';

const customerGridStatus = (props) => (
  <div className="flex gap-2 justify-center items-center text-gray-700 capitalize">
    <p style={{ background: '#F0C43C' }} className="rounded-full h-3 w-3" />
    <p>{props.nom}</p>
  </div>
);

const concessions = [
  {
    id: '#5089',
    nom: 'Investissement...',
    date: '14 Juin 2024 -> 29 Juillet 2026',
    datet: '14 Juin 2024 -> 29 Juillet 2026',
    rate: '7 OZT/g',
    investors: 1200,
    but: 70,
  },
  {
    id: '#5089',
    nom: 'Investissement...',
    date: '14 Juin 2024 -> 29 Juillet 2026',
    datet: '14 Juin 2024 -> 29 Juillet 2026',
    rate: '7 OZT/g',
    investors: 1230,
    but: 55,
  },
  {
    id: '#5089',
    nom: 'Investissement...',
    date: '14 Juin 2024 -> 29 Juillet 2026',
    datet: '14 Juin 2024 -> 29 Juillet 2026',
    rate: '7 OZT/g',
    investors: 784,
    but: 23,
  },
  {
    id: '#5089',
    nom: 'Investissement...',
    date: '14 Juin 2024 -> 29 Juillet 2026',
    datet: '14 Juin 2024 -> 29 Juillet 2026',
    rate: '7 OZT/g',
    investors: 3941,
    but: 50,
  },
  {
    id: '#5089',
    nom: 'Investissement...',
    date: '14 Juin 2024 -> 29 Juillet 2026',
    datet: '14 Juin 2024 -> 29 Juillet 2026',
    rate: '7 OZT/g',
    investors: 3941,
    but: 50,
  },
  {
    id: '#5089',
    nom: 'Investissement...',
    date: '14 Juin 2024 -> 29 Juillet 2026',
    datet: '14 Juin 2024 -> 29 Juillet 2026',
    rate: '7 OZT/g',
    investors: 3941,
    but: 50,
  },
  {
    id: '#5089',
    nom: 'Investissement...',
    date: '14 Juin 2024 -> 29 Juillet 2026',
    datet: '14 Juin 2024 -> 29 Juillet 2026',
    rate: '7 OZT/g',
    investors: 3941,
    but: 50,
  },
  {
    id: '#5089',
    nom: 'Investissement...',
    date: '14 Juin 2024 -> 29 Juillet 2026',
    datet: '14 Juin 2024 -> 29 Juillet 2026',
    rate: '7 OZT/g',
    investors: 3941,
    but: 50,
  },
  {
    id: '#5089',
    nom: 'Investissement...',
    date: '14 Juin 2024 -> 29 Juillet 2026',
    datet: '14 Juin 2024 -> 29 Juillet 2026',
    rate: '7 OZT/g',
    investors: 3941,
    but: 50,
  },
  {
    id: '#5089',
    nom: 'Investissement...',
    date: '14 Juin 2024 -> 29 Juillet 2026',
    datet: '14 Juin 2024 -> 29 Juillet 2026',
    rate: '7 OZT/g',
    investors: 3941,
    but: 50,
  },
  {
    id: '#5089',
    nom: 'Investissement...',
    date: '14 Juin 2024 -> 29 Juillet 2026',
    datet: '14 Juin 2024 -> 29 Juillet 2026',
    rate: '7 OZT/g',
    investors: 3941,
    but: 50,
  },
  {
    id: '#5089',
    nom: 'Investissement...',
    date: '14 Juin 2024 -> 29 Juillet 2026',
    datet: '14 Juin 2024 -> 29 Juillet 2026',
    rate: '7 OZT/g',
    investors: 3941,
    but: 50,
  },
  {
    id: '#5089',
    nom: 'Investissement...',
    date: '14 Juin 2024 -> 29 Juillet 2026',
    datet: '14 Juin 2024 -> 29 Juillet 2026',
    rate: '7 OZT/g',
    investors: 3941,
    but: 50,
  },
  {
    id: '#5089',
    nom: 'Investissement...',
    date: '14 Juin 2024 -> 29 Juillet 2026',
    datet: '14 Juin 2024 -> 29 Juillet 2026',
    rate: '7 OZT/g',
    investors: 3941,
    but: 50,
  },
  {
    id: '#5089',
    nom: 'Investissement...',
    date: '14 Juin 2024 -> 29 Juillet 2026',
    datet: '14 Juin 2024 -> 29 Juillet 2026',
    rate: '7 OZT/g',
    investors: 3941,
    but: 50,
  },
  {
    id: '#5089',
    nom: 'Investissement...',
    date: '14 Juin 2024 -> 29 Juillet 2026',
    datet: '14 Juin 2024 -> 29 Juillet 2026',
    rate: '7 OZT/g',
    investors: 3941,
    but: 50,
  },
  {
    id: '#5089',
    nom: 'Investissement...',
    date: '14 Juin 2024 -> 29 Juillet 2026',
    datet: '14 Juin 2024 -> 29 Juillet 2026',
    rate: '7 OZT/g',
    investors: 3941,
    but: 50,
  },
  {
    id: '#5089',
    nom: 'Investissement...',
    date: '14 Juin 2024 -> 29 Juillet 2026',
    datet: '14 Juin 2024 -> 29 Juillet 2026',
    rate: '7 OZT/g',
    investors: 3941,
    but: 50,
  },
  {
    id: '#5089',
    nom: 'Investissement...',
    date: '14 Juin 2024 -> 29 Juillet 2026',
    datet: '14 Juin 2024 -> 29 Juillet 2026',
    rate: '7 OZT/g',
    investors: 3941,
    but: 50,
  },
  {
    id: '#5089',
    nom: 'Investissement...',
    date: '14 Juin 2024 -> 29 Juillet 2026',
    datet: '14 Juin 2024 -> 29 Juillet 2026',
    rate: '7 OZT/g',
    investors: 3941,
    but: 50,
  },
  {
    id: '#5089',
    nom: 'Investissement...',
    date: '14 Juin 2024 -> 29 Juillet 2026',
    datet: '14 Juin 2024 -> 29 Juillet 2026',
    rate: '7 OZT/g',
    investors: 3941,
    but: 50,
  },
  {
    id: '#5089',
    nom: 'Investissement...',
    date: '14 Juin 2024 -> 29 Juillet 2026',
    datet: '14 Juin 2024 -> 29 Juillet 2026',
    rate: '7 OZT/g',
    investors: 3941,
    but: 50,
  },
  {
    id: '#5089',
    nom: 'Investissement...',
    date: '14 Juin 2024 -> 29 Juillet 2026',
    datet: '14 Juin 2024 -> 29 Juillet 2026',
    rate: '7 OZT/g',
    investors: 3941,
    but: 50,
  },
  {
    id: '#5089',
    nom: 'Investissement...',
    date: '14 Juin 2024 -> 29 Juillet 2026',
    datet: '14 Juin 2024 -> 29 Juillet 2026',
    rate: '7 OZT/g',
    investors: 3941,
    but: 50,
  },
  {
    id: '#5089',
    nom: 'Investissement...',
    date: '14 Juin 2024 -> 29 Juillet 2026',
    datet: '14 Juin 2024 -> 29 Juillet 2026',
    rate: '7 OZT/g',
    investors: 3941,
    but: 50,
  },
  {
    id: '#5089',
    nom: 'Investissement...',
    date: '14 Juin 2024 -> 29 Juillet 2026',
    datet: '14 Juin 2024 -> 29 Juillet 2026',
    rate: '7 OZT/g',
    investors: 3941,
    but: 50,
  },
  {
    id: '#5089',
    nom: 'Investissement...',
    date: '14 Juin 2024 -> 29 Juillet 2026',
    datet: '14 Juin 2024 -> 29 Juillet 2026',
    rate: '7 OZT/g',
    investors: 3941,
    but: 50,
  },
  {
    id: '#5089',
    nom: 'Investissement...',
    date: '14 Juin 2024 -> 29 Juillet 2026',
    datet: '14 Juin 2024 -> 29 Juillet 2026',
    rate: '7 OZT/g',
    investors: 3941,
    but: 50,
  },
  {
    id: '#5089',
    nom: 'Investissement...',
    date: '14 Juin 2024 -> 29 Juillet 2026',
    datet: '14 Juin 2024 -> 29 Juillet 2026',
    rate: '7 OZT/g',
    investors: 3941,
    but: 50,
  },
  {
    id: '#5089',
    nom: 'Investissement...',
    date: '14 Juin 2024 -> 29 Juillet 2026',
    datet: '14 Juin 2024 -> 29 Juillet 2026',
    rate: '7 OZT/g',
    investors: 3941,
    but: 50,
  },
  {
    id: '#5089',
    nom: 'Investissement...',
    date: '14 Juin 2024 -> 29 Juillet 2026',
    datet: '14 Juin 2024 -> 29 Juillet 2026',
    rate: '7 OZT/g',
    investors: 3941,
    but: 50,
  },
  {
    id: '#5089',
    nom: 'Investissement...',
    date: '14 Juin 2024 -> 29 Juillet 2026',
    datet: '14 Juin 2024 -> 29 Juillet 2026',
    rate: '7 OZT/g',
    investors: 3941,
    but: 50,
  },
  {
    id: '#5089',
    nom: 'Investissement...',
    date: '14 Juin 2024 -> 29 Juillet 2026',
    datet: '14 Juin 2024 -> 29 Juillet 2026',
    rate: '7 OZT/g',
    investors: 3941,
    but: 50,
  },
  {
    id: '#5089',
    nom: 'Investissement...',
    date: '14 Juin 2024 -> 29 Juillet 2026',
    datet: '14 Juin 2024 -> 29 Juillet 2026',
    rate: '7 OZT/g',
    investors: 3941,
    but: 50,
  },
  {
    id: '#5089',
    nom: 'Investissement...',
    date: '14 Juin 2024 -> 29 Juillet 2026',
    datet: '14 Juin 2024 -> 29 Juillet 2026',
    rate: '7 OZT/g',
    investors: 3941,
    but: 50,
  },
  {
    id: '#5089',
    nom: 'Investissement...',
    date: '14 Juin 2024 -> 29 Juillet 2026',
    datet: '14 Juin 2024 -> 29 Juillet 2026',
    rate: '7 OZT/g',
    investors: 3941,
    but: 50,
  },
  {
    id: '#5089',
    nom: 'Investissement...',
    date: '14 Juin 2024 -> 29 Juillet 2026',
    datet: '14 Juin 2024 -> 29 Juillet 2026',
    rate: '7 OZT/g',
    investors: 3941,
    but: 50,
  },
  {
    id: '#5089',
    nom: 'Investissement...',
    date: '14 Juin 2024 -> 29 Juillet 2026',
    datet: '14 Juin 2024 -> 29 Juillet 2026',
    rate: '7 OZT/g',
    investors: 3941,
    but: 50,
  },
  {
    id: '#5089',
    nom: 'Investissement...',
    date: '14 Juin 2024 -> 29 Juillet 2026',
    datet: '14 Juin 2024 -> 29 Juillet 2026',
    rate: '7 OZT/g',
    investors: 3941,
    but: 50,
  },
  {
    id: '#5089',
    nom: 'Investissement...',
    date: '14 Juin 2024 -> 29 Juillet 2026',
    datet: '14 Juin 2024 -> 29 Juillet 2026',
    rate: '7 OZT/g',
    investors: 3941,
    but: 50,
  },
  {
    id: '#5089',
    nom: 'Investissement...',
    date: '14 Juin 2024 -> 29 Juillet 2026',
    datet: '14 Juin 2024 -> 29 Juillet 2026',
    rate: '7 OZT/g',
    investors: 3941,
    but: 50,
  },
  {
    id: '#5089',
    nom: 'Investissement...',
    date: '14 Juin 2024 -> 29 Juillet 2026',
    datet: '14 Juin 2024 -> 29 Juillet 2026',
    rate: '7 OZT/g',
    investors: 3941,
    but: 50,
  },
  {
    id: '#5089',
    nom: 'Investissement...',
    date: '14 Juin 2024 -> 29 Juillet 2026',
    datet: '14 Juin 2024 -> 29 Juillet 2026',
    rate: '7 OZT/g',
    investors: 3941,
    but: 50,
  },
  {
    id: '#5089',
    nom: 'Investissement...',
    date: '14 Juin 2024 -> 29 Juillet 2026',
    datet: '14 Juin 2024 -> 29 Juillet 2026',
    rate: '7 OZT/g',
    investors: 3941,
    but: 50,
  },
  {
    id: '#5089',
    nom: 'Investissement...',
    date: '14 Juin 2024 -> 29 Juillet 2026',
    datet: '14 Juin 2024 -> 29 Juillet 2026',
    rate: '7 OZT/g',
    investors: 3941,
    but: 50,
  },
  {
    id: '#5089',
    nom: 'Investissement...',
    date: '14 Juin 2024 -> 29 Juillet 2026',
    datet: '14 Juin 2024 -> 29 Juillet 2026',
    rate: '7 OZT/g',
    investors: 3941,
    but: 50,
  },
  {
    id: '#5089',
    nom: 'Investissement...',
    date: '14 Juin 2024 -> 29 Juillet 2026',
    datet: '14 Juin 2024 -> 29 Juillet 2026',
    rate: '7 OZT/g',
    investors: 3941,
    but: 50,
  },
  {
    id: '#5089',
    nom: 'Investissement...',
    date: '14 Juin 2024 -> 29 Juillet 2026',
    datet: '14 Juin 2024 -> 29 Juillet 2026',
    rate: '7 OZT/g',
    investors: 3941,
    but: 50,
  },
  {
    id: '#5089',
    nom: 'Investissement...',
    date: '14 Juin 2024 -> 29 Juillet 2026',
    datet: '14 Juin 2024 -> 29 Juillet 2026',
    rate: '7 OZT/g',
    investors: 3941,
    but: 50,
  },
  {
    id: '#5089',
    nom: 'Investissement...',
    date: '14 Juin 2024 -> 29 Juillet 2026',
    datet: '14 Juin 2024 -> 29 Juillet 2026',
    rate: '7 OZT/g',
    investors: 3941,
    but: 50,
  },
  
];

const Gestiondesconcessions = () => {
  const navigate = useNavigate();

<button onClick={() => navigate('/create')} className="button-9">Créer une concession</button>

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header title="Gestion des concessions" />
      <p style={{ color: 'gray', fontSize: '18px' }}>Listes des Concessions</p>
      {/* Search and filter controls */}
      <div className="flex justify-between gap-2 mb-4">
      <Link to="/create" className="button-9">Créer une concession</Link>

        <div className="flex gap-2">
          <input type="text" placeholder="Chercher..." className="border border-gray-300 px-2 py-1 rounded text-gray-700 custom-height" />
          <select className="border border-gray-300 px-2 py-1 rounded text-gray-700 custom-height">
            <option value="">Matière</option>
            {/* Add matière options here */}
          </select>
          <select className="border border-gray-300 px-2 py-1 rounded text-gray-700 custom-height">
            <option value="">Type de Transaction</option>
            {/* Add type options here */}
          </select>
          <select className="border border-gray-300 px-2 py-1 rounded text-gray-700 custom-height">
            <option value="">Pays de l'utilisateur</option>
            {/* Add pays options here */}
          </select>
        </div>
      </div>
      <GridComponent
        dataSource={concessions}
        allowPaging
        pageSettings={{ pageCount: 5 }}
        allowSorting
        pagerTemplate={(props) => (
          <nav className="pagination-container">
            <button className="pagination-button" onClick={() => props.currentPage > 1 && props.goToPage(props.currentPage - 1)}>
              Previous
            </button>
            {[...Array(props.totalPages)].map((_, index) => (
              <button
                key={index}
                className={props.currentPage === index + 1 ? 'pagination-active' : 'pagination-item'}
                onClick={() => props.goToPage(index + 1)}
              >
                {index + 1}
              </button>
            ))}
            <button className="pagination-button" onClick={() => props.currentPage < props.totalPages && props.goToPage(props.currentPage + 1)}>
              Next
            </button>
          </nav>
        )}
      >
        <ColumnsDirective>
        <ColumnDirective field='id' headerText='ID' width='10%' template={(rowData) => (
  <div style={{ color: 'blue' }}>{rowData.id}</div>
)} />

          <ColumnDirective field='nom' headerText='NOM' width='130' textAlign='Center' template={customerGridStatus} />
          <ColumnDirective 
            field='date' 
            headerText='DATE DEXPLOITATION' 
            width='130' 
            textAlign='Center' 
            template={(data) => {
              const [startDate, endDate] = data.date.split('->');
              return `${startDate.trim()} ➔ ${endDate.trim()}`;
            }}
          />
          <ColumnDirective 
            field='datet' 
            headerText='DATE DINVESTISSEMENT' 
            width='130' 
            textAlign='Center' 
            template={(data) => {
              const [startDate, endDate] = data.datet.split('->');
              return `${startDate.trim()} ➔ ${endDate.trim()}`;
            }}
          />
  <ColumnDirective field='rate' headerText='Taux' headerTextAlign='Left' textAlign='Right' width='50' />
<ColumnDirective field='investors' headerText='NB INVESTISSEURS' headerTextAlign='Left' textAlign='Right' width='50' />
          
          <ColumnDirective headerText='BUT' width='80' template={(rowData) => (
            <aside className="container">
              <p className="percentage">{`${rowData.but}%`}</p>
              <div className="progress-bar-container">
                <div className="progress-bar" style={{ width: `${rowData.but}%` }}></div>
              </div>
            </aside>
          )} />
          <ColumnDirective field='act' headerText='ACTION' width='80' textAlign='Center' template={(data) => (
            <aside className="image-container">
              <section className="image-wrapper">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4d65c6c55cfb3cea8a1eb4b1849049de83ad20782516e1ffd8dcca72082bed6f?apiKey=16edf050187a4ba683d958ed97898d7e&" alt="Description of Image 1" className="image" />
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/cec4489befbd72c4292dfae02e864e09b586752b3a0a81b0b93ab26fbfceb247?apiKey=16edf050187a4ba683d958ed97898d7e&" alt="Description of Image 2" className="image" />
              </section>
            </aside>
          )} />
        </ColumnsDirective>
        <Inject services={[Page, Selection, Toolbar, Edit, Sort, Filter, Pager]} />
      </GridComponent>
    </div>
  );
};

export default Gestiondesconcessions;