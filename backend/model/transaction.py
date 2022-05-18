from marshmallow import Schema, fields, post_load


class Transaction():
    def __init__(self, date_time, eth_only, btc_only, invest_50_50, invest_60_40, invest_80_20, invest_day):
        self.date_time = date_time
        self.eth_only = eth_only
        self.btc_only = btc_only
        self.invest_50_50 = invest_50_50
        self.invest_60_40 = invest_60_40
        self.invest_80_20 = invest_80_20
        self.invest_day = invest_day

    def __repr__(self):
        return '<Transaction(date_time={self.date_time!r}, eth_only={self.eth_only}, btc_only={self.btc_only}, invest_50_50={self.invest_50_50}, invest_60_40={self.invest_60_40}, invest_80_20={self.invest_80_20}, invest_day={self.invest_day})>'.format(self=self)


class TransactionSchema(Schema):
    date_time = fields.String()
    eth_only = fields.Number()
    btc_only = fields.Number()
    invest_50_50 = fields.Number()
    invest_60_40 = fields.Number()
    invest_80_20 = fields.Number()
    invest_day = fields.Number()
