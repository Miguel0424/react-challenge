// RewardPointsCalculator.js
import React from 'react';

const RewardPointsCalculator = ({ transactions }) => {
    const calculatePoints = (amount) => {
        let points = 0;

        if (amount > 100) {
            points += (amount - 100) * 2;
            amount = 100;
        }

        if (amount > 50) {
            points += (amount - 50);
        }

        if (amount === 50) {
            points += 1;
        }

        return points;
    };

    const calculateTotalPoints = (customerId) => {
        const customerTransactions = transactions.filter(
            (transaction) => transaction.customerId === customerId
        );

        return customerTransactions.reduce((total, transaction) => {
            return total + calculatePoints(transaction.amount);
        }, 0);
    };

    return (
        <div style={styles.container}>
            <h2>Reward Points Calculator</h2>
            {transactions.map((transaction, index) => (
                <div key={index} style={styles.transaction}>
                    Customer {transaction.customerId} earned{' '}
                    {calculatePoints(transaction.amount)} points in {transaction.month} for {transaction.amount}$.
                </div>
            ))}
            <div style={styles.totalPoints}>
                Total points for Customer 1: {calculateTotalPoints(1)}
            </div>
            <div style={styles.totalPoints}>
                Total points for Customer 2: {calculateTotalPoints(2)}
            </div>
            {/* Add more customers as needed */}
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
        backgroundColor: '#f0f0f0',
        borderRadius: '5px',
        maxWidth: '400px',
        margin: '0 auto',
    },
    transaction: {
        marginBottom: '10px',
    },
    totalPoints: {
        fontWeight: 'bold',
        marginTop: '10px',
    },
};


export default RewardPointsCalculator;
