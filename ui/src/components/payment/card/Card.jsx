import "./styles.scss";
import React, { useState } from 'react'
import { Button } from "@mui/material";
import Input from "../../common/Input";
import SelectBox from "../../common/SelectBox";
import { useDispatch } from "react-redux";
import { addPaymentDetails } from "../../../redux";
import { useNavigate } from "react-router-dom";



const initialValue = {
    type:'Visa',
    name:'',
    number:'',
    expiry:{
        month:'MMM',
        year:'yyyy'
    },
    cvv:''
}

const initialErrorObj = {
    type:'',
    name:'',
    number:'',
    expiry:{
        month:'',
        year:''
    },
    cvv:''
}

const Card = () => {
    const [cardDetails, setCardDetials] = useState(initialValue);
    const [errorObj, setErrorObj] = useState(initialErrorObj);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onCheckout = () => {
        let object = {...initialErrorObj,expiry:{month:'',year:''}};
        let inValidEntry = false;
        for(let key in cardDetails){
            if(key == 'name' && cardDetails.name.length<3){
                object[key] = 'Enter a valid name';
                inValidEntry = true;
            } 
            if(key == 'number' && cardDetails.number.length<19){
                object[key] = 'Enter a valid card number';
                inValidEntry = true;
            } 
            if(key == 'cvv' && cardDetails.cvv.length<3){
                object[key] = 'Enter a valid cvv';
                inValidEntry = true;
            }
            if(key == 'expiry'){
                for(let nestedKey in cardDetails[key]){
                    if(nestedKey == 'month' && cardDetails[key][nestedKey] === 'MMM'){
                        object[key][nestedKey] = 'Select month';
                        inValidEntry = true;
                    }
                    if(nestedKey == 'year' && cardDetails[key][nestedKey] === 'yyyy'){
                        object[key][nestedKey] = 'Select year';
                        inValidEntry = true;
                    }
                }
            }
        }
        if(inValidEntry){
            setErrorObj(object);
            return;
        }else{
            dispatch(addPaymentDetails(cardDetails));
            navigate("/checkout");
        }
    }
    
    const onChangeName = (value) =>{
        value = value.toUpperCase().replace(/[^A-Z]/g,'');
        setCardDetials({...cardDetails,name:value});
    }
    const onChangeCardNumber = (value) =>{
        const regex = /^(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})$/g
        let onlyNumbers = value.replace(/[^\d]/g, '')
      
        onlyNumbers = onlyNumbers.replace(regex, (regex, $1, $2, $3, $4) =>
          [$1, $2, $3, $4].filter(group => !!group).join(' ')
        )
        setCardDetials({...cardDetails,number:onlyNumbers});
    }
    const onChangeCVV = (value) =>{
        let onlyNumbers = value.replace(/[^\d]/g, '')
        setCardDetials({...cardDetails,cvv:onlyNumbers});
    }

    const onUpdateCardType=()=>{

    }

    const onUpdateExpiryMonth = (value) =>{
        setCardDetials({...cardDetails,expiry:{...cardDetails.expiry,month:value}});
    }
    const onUpdateExpiryYear = (value) =>{
        setCardDetials({...cardDetails,expiry:{...cardDetails.expiry,year:value}});
    }

    return (
        <div className="credit-card">
            <h3 className="credit-card__details">Credit Card Details</h3>
            <p>Card Type</p>
            <SelectBox 
                id="card-type" 
                value={cardDetails.type}
                updateValue={onUpdateCardType}
                errorText={errorObj['type']}
                options={[
                    {key:'Visa', value:'Visa'}
                ]}/>

            <p>Cardholder's Name</p>
            <Input id="card-name" placeholder={"Enter name"} value={cardDetails.name} updateValue={onChangeName} errorText={errorObj['name']} maxLength={20}/>

            <p>Card Number</p>
            <Input id="card-number" value={cardDetails.number} placeholder="**** **** **** ****" updateValue={onChangeCardNumber} errorText={errorObj['number']} maxLength={19}/>

            
            <div className="credit-card__expiry">
                <div >
                    <p>Expiration Date</p>
                    <div className="credit-card__expiry__date">
                    <SelectBox 
                        id="card-exp-month"
                        value={cardDetails.expiry.month}
                        width={75}
                        updateValue={onUpdateExpiryMonth} 
                        errorText={errorObj['expiry']['month']}
                        options={[
                            {key:'mmm', value:'MMM', disabled:true},
                            {key:'jan', value:'Jan'},
                            {key:'feb', value:'Feb'},
                            {key:'mar', value:'Mar'},
                            {key:'apr', value:'Apr'},
                            {key:'may', value:'May'},
                            {key:'jun', value:'Jun'},
                            {key:'jul', value:'Jul'},
                            {key:'aug', value:'Aug'},
                            {key:'sept', value:'Sept'},
                            {key:'oct', value:'Oct'},
                            {key:'nov', value:'Nov'},
                            {key:'dec', value:'Dec'},
                        ]}/>
                        <SelectBox 
                        id="card-exp-year"
                        value={cardDetails.expiry.year}
                        width={75}
                        updateValue={onUpdateExpiryYear} 
                        errorText={errorObj['expiry']['year']}
                        options={[
                            {key:'yyyy', value:'yyyy', disabled:true},
                            {key:'2023', value:'2023' },
                            {key:'2024', value:'2024'},
                            {key:'2025', value:'2025'},
                            {key:'2026', value:'2026'},
                            {key:'2027', value:'2028'},
                            {key:'2029', value:'2029'},
                            {key:'2030', value:'2030'}
                        ]}/>
                    </div>
                </div>
                <div>
                    <p>CVV</p>
                    <Input id="card-cvv" placeholder="***" value={cardDetails.cvv} updateValue={onChangeCVV} width="75" maxLength={3} errorText={errorObj['cvv']}/>
                </div>
            </div>
                <div className="credit-card__checkout">
                    <Button variant="contained" size="medium" onClick={onCheckout}>Checkout</Button>
                </div>
            </div>
    )
}

export default Card