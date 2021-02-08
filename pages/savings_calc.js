import Head from 'next/head'
import styles from "../styles/Calculator.module.css";
import { useState } from 'react';


export default function Savings_Calc({ calculateCost }) {
    const [currentCost, setCurrentCost] = useState(0);
    const [employees, setEmployees] = useState(0);
    const [figure, setFigure] = useState(0);

    const onSubmit = (e) => {
        e.preventDefault();

        if(!currentCost || isNaN(currentCost)) {
            alert('Please type in your current Accounting costs');
            return
        }
        else if(!employees || isNaN(employees)) {
            alert('Please type in how many employees your company has');
            return
        }

        calculateCost({ currentCost, employees })
    }

    calculateCost = (inputValues) => {
        let costSavings = (inputValues.currentCost * 12) - (39 + (4 * inputValues.employees));
        setFigure(costSavings.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '1,'));
    }

    return (
        <>
            <Head>
                <title>Ember Ltd | Savings Calculator</title>
                <meta property="og:title" content="Savings Calculator" key="SavCalc" />
            </Head>



            <div className={styles.container}>
                <div className={styles.inputSection}>
                    <h1 className={styles.heading}>Savings Calculator</h1>
                    <form className='costForm' onSubmit={onSubmit}>
                        <p>How much do you currently pay your accountant per month?</p>
                        <input className={styles.input1} value={currentCost}
                               onChange={(e) => setCurrentCost(
                                   e.target.value
                               )}/> <br />
                        <p>How many employees do you have?</p>
                        <input className={styles.input2} value={employees}
                               onChange={(e) => setEmployees(
                                   e.target.value
                               )}/> <br />
                        <button className={styles.btn}>Find out how much I'll save</button>
                    </form>
                </div>
                <div className={styles.textSection}>
                    <p className={styles.text}>You'll save<br/><span className={styles.cost}>£{figure}</span><br/>per year</p>
                </div>
            </div>
        </>
    )
}