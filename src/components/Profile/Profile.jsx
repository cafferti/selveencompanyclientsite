import React, { useState } from 'react';
import "./Profile.css";
function Profile() {
  const [isOpen, setIsOpen] = useState(false); // Initially closed

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className='container'>
      <button className="button" onClick={toggleContent}>
        {isOpen ? 'Collapse' : 'Check out our team'}
      </button>
      </div>
      {isOpen && (
        <div>
          <div class="profile">
             {" "}
      <div class="card card_purple">
                   {" "}
        <header class="card-header">
                          <img src="" class="card__img" alt="image" />         
               {" "}
          <div>
                               {" "}
            <h3>
              Ponsak <span className="blue">Longtau</span>
            </h3>
                                <p>Managing Director</p>               {" "}
          </div>
                     {" "}
        </header>
                    <hr className="line" />           {" "}
        <div class="card__lead">
                         {" "}
          <p>
            <span className="space">Phone:</span>
            <span className="blue">09034703963</span>
          </p>
                         {" "}
          <p>
            <span className="space">mail:</span>
            <span className="blue">ponsaklongtau@gmail.com</span>
          </p>
                         {" "}
          <p>
            <span className="space">Gender:</span>
            <span className="blue">Male</span>
          </p>
                     {" "}
        </div>
                    <br />           {" "}
        <p class="card__qoute">
                      Ponsak Longtau our team lead is a thriving real estate professional based in Jos, Plateau State, boasting 8 years of experience in the dynamic property market.
        </p>
               {" "}
      </div>
             {" "}
      <div class="card card_purple">
                   {" "}
        <header class="card-header">
                         {" "}
          <img src="3nandom_joseph_gora.jpg" class="card__img" alt="image" />   
                     {" "}
          <div>
                           {" "}
            <h3>
              Nandom <span className="blue">Joseph Gora</span>
            </h3>
                                <p>Architect</p>               {" "}
          </div>
                     {" "}
        </header>
                    <hr className="line" />           {" "}
        <div class="card__lead">
                         {" "}
          <p>
            <span className="space">Phone:</span>
            <span className="blue">07068785398</span>
          </p>
                         {" "}
          <p>
            <span className="space">mail:</span>
            <span className="blue">nandomgora88@gmail.com</span>
          </p>
                         {" "}
          <p>
            <span className="space">Gender:</span>
            <span className="blue">Male</span>
          </p>
                     {" "}
        </div>
                    <br />           {" "}
        <p class="card__qoute">
        A creative visionary blending architecture and real estate expertise, Nandom Gora designs spaces for our clients that inspire and elevate. 
        </p>
               {" "}
      </div>
                         {" "}

      <div class="card card__purple">
                           {" "}
        <header class="card-header">
                                 {" "}
          <img src="./1st.jpg" class="card__img" alt="image" />                 
               {" "}
          <div>
                                   {" "}
            <h3>
              ML Kyemang <span className="blue">Esq</span>
            </h3>
                                <p>Attorney</p>               {" "}
          </div>
                     {" "}
        </header>
                    <hr className="line" />           {" "}
        <div class="card__lead">
                         {" "}
          <p>
            <span className="space">Phone:</span>
            <span className="blue">08036028003</span>
          </p>
                         {" "}
          <p>
            <span className="space">mail:</span>
            <span className="blue">kyemang@outlook.com</span>
          </p>
                         {" "}
          <p>
            <span className="space">Gender:</span>
            <span className="blue">Male</span>
          </p>
                     {" "}
        </div>
                    <br />           {" "}
        <p class="card__qoute">
        Our legal expert who specializes in real estate law, Barrister Kyemang Mundi skillfully helps us to navigate the complexities of property transactions. 
        </p>
               {" "}
      </div>


      <div class="card card__purple">
                       {" "}
        <header class="card-header">
                             {" "}
          <img src="./4william_seyilnen.png" class="card__img" alt="image" />   
                         {" "}
          <div>
                               {" "}
            <h3>
              William <span className="blue">Seyilnen</span>
            </h3>
                                <p>Leasing/Appraisal Director</p>               {" "}
          </div>
                     {" "}
        </header>
                    <hr className="line" />           {" "}
        <div class="card__lead">
                         {" "}
          <p>
            <span className="space">Phone:</span>
            <span className="blue">08021123556</span>
          </p>
                         {" "}
          <p>
            <span className="space">mail:</span>
            <span className="blue">williammuseyilnen@gmail.com</span>
          </p>
                         {" "}
          <p>
            <span className="space">Gender:</span>
            <span className="blue">Female</span>
          </p>
                     {" "}
        </div>
                    <br />           {" "}
        <p class="card__qoute">
        A seasoned professional in the real estate industry, Seyilnen William expertly helps us to navigate the complexities of leasing and appraisal.  
        </p>
               {" "}
      </div>
             {" "}
      <div class="card card__purple">
                   {" "}
        <header class="card-header">
                          <img src="2nd.jpg" class="card__img" alt="image" />   
                     {" "}
          <div>
                           {" "}
            <h3>
              Ishaku <span className="blue">Dyelshak</span>
            </h3>
                                <p>IT/Complaince Officer</p>               {" "}
          </div>
                     {" "}
        </header>
                    <hr className="line" />           {" "}
        <div class="card__lead">
                         {" "}
          <p>
            <span className="space">Phone:</span>
            <span className="blue">09035249481</span>
          </p>
                         {" "}
          <p>
            <span className="space">mail:</span>
            <span className="blue">ishakudyelshak@gmail.com</span>
          </p>
                         {" "}
          <p>
            <span className="space">Gender:</span>
            <span className="blue">Male</span>
          </p>
                     {" "}
        </div>
                    <br />           {" "}
        <p class="card__qoute">
        A meticulous guardian of our data integrity, he ensures we adhere to regulatory compliance in the real estate industry, Ishaku Dyelshak ensures a smooth running of all our ICT infrastructure and services. 
        </p>
               {" "}
      </div>
                     {" "}
      <div class="card card__purple">
                           {" "}
        <header class="card-header">
                                  <img src="img5.jpg" class="card__img" alt="image" /> 
                               {" "}
          <div>
                                   {" "}
            <h3>
              Dape <span className="blue">Nan'ep Dawam</span>
            </h3>
                                <p>Project Manager</p>               {" "}
          </div>
                     {" "}
        </header>
                    <hr className="line" />           {" "}
        <div class="card__lead">
                         {" "}
          <p>
            <span className="space">Phone:</span>
            <span className="blue">08165363081</span>
          </p>
                         {" "}
          <p>
            <span className="space">mail:</span>
            <span className="blue">dapenanep@gmail.com</span>
          </p>
                         {" "}
          <p>
            <span className="space">Gender:</span>
            <span className="blue">Male</span>
          </p>
                     {" "}
        </div>
                    <br />           {" "}
        <p class="card__qoute">
        A dynamic member of our team with years of experience in the real estate industry, Dape Nan'ep expertly orchestrates the successful completion of our diverse projects. 
        </p>
               {" "}
      </div>
                 {" "}
    </div>
        </div>
      )}
    </div>
  );
}
export default Profile;