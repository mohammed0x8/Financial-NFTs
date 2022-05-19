from flask import Flask, jsonify, request
import pandas as pd
import json
from backend.model.transaction import Transaction, TransactionSchema

app = Flask(__name__)

print('populating mock data...')
mock_data = pd.read_csv('./backend/weighted_portfolio_2019-21.csv')
transactions = []
for i, row in mock_data.iterrows():
    transaction = TransactionSchema().load(row.to_dict())
    transactions.append(transaction)


@app.route('/weighted_portfolio')
def get_weighted_portfolio():
    weighted_portfolio = TransactionSchema(many=True).dump(transactions)
    return jsonify(weighted_portfolio)


if __name__ == "__main__":
    app.run()
