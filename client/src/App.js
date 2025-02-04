/* import { useGetDataQuery } from "./redux/bankApi";

const App = () => {
  const { data, error, isLoading, isSuccess } = useGetDataQuery();
  console.log(data);
  return (
    <div>
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>Something went wroung.</h2>}
      {isSuccess && data && <h1>Welcome to Dashboard</h1>}
    </div>
  );
};

export default App; */

import classes from "./App.module.css";
//import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import BarChart from "./components/Barchart";
import Piechart from "./components/Piechart";

function App() {
  var xyValues = [
    {
      metadata: {
        id: "36a061ac-124f-40f8-b0b0-211914ce6696",
        created: "2022-06-28T10:35:27.111001Z",
        last_accessed: "2022-06-28T12:10:27.302762Z",
        iban: "FI347283230412374920",
        institution_id: "S_PANKKI_SBANFIHH",
        status: "READY",
      },
      balances: {
        balances: [
          {
            balanceAmount: {
              amount: "130000.94",
              currency: "EUR",
            },
            balanceType: "interimBooked",
          },
          {
            balanceAmount: {
              amount: "129990.44",
              currency: "EUR",
            },
            balanceType: "interimAvailable",
          },
        ],
      },
      details: {
        account: {
          resourceId: "b75272f6-aed1-11ec-9b6b-23460c492eb8",
          iban: "FI347283230412374920",
          currency: "EUR",
          ownerName: "DINATALE NATHAN",
          product: "CurrentAccount",
          usage: "PRIV",
        },
      },
      transactions: {
        transactions: {
          booked: [
            {
              bankTransactionCode: "CCRD-POSD",
              bookingDate: "2022-06-28",
              creditorName: "Backerei Wimmer Fil.73",
              proprietaryBankTransactionCode: "KOO",
              transactionAmount: {
                amount: "-1.70",
                currency: "EUR",
              },
              transactionId: "20220628392990685503",
            },
            {
              bankTransactionCode: "CCRD-POSD",
              bookingDate: "2022-06-28",
              creditorName: "Flgh .Muenchen MyDutyFree",
              proprietaryBankTransactionCode: "KOO",
              transactionAmount: {
                amount: "-10.50",
                currency: "EUR",
              },
              transactionId: "20220628392990695777",
            },
            {
              bankTransactionCode: "CCRD-POSD",
              bookingDate: "2022-06-28",
              creditorName: "Backerei Wimmer Fil.73",
              proprietaryBankTransactionCode: "KOO",
              transactionAmount: {
                amount: "-11.80",
                currency: "EUR",
              },
              transactionId: "20220628392990685507",
            },
            {
              bankTransactionCode: "CCRD-POSD",
              bookingDate: "2022-06-28",
              creditorName: "Wolt",
              proprietaryBankTransactionCode: "KOO",
              transactionAmount: {
                amount: "-18.60",
                currency: "EUR",
              },
              transactionId: "20220628392990658480",
            },
            {
              bankTransactionCode: "CCRD-POSD",
              bookingDate: "2022-06-27",
              creditorName: "FR LOsteria SE",
              proprietaryBankTransactionCode: "KOO",
              transactionAmount: {
                amount: "-25.35",
                currency: "EUR",
              },
              transactionId: "20220627392993128357",
            },
            {
              bankTransactionCode: "CCRD-POSD",
              bookingDate: "2022-06-27",
              creditorName: "DB Automaten",
              proprietaryBankTransactionCode: "KOO",
              transactionAmount: {
                amount: "-9.00",
                currency: "EUR",
              },
              transactionId: "20220627392991642858",
            },
            {
              bankTransactionCode: "CCRD-POSD",
              bookingDate: "2022-06-27",
              creditorName: "FC Bayern World Weinstras",
              proprietaryBankTransactionCode: "KOO",
              transactionAmount: {
                amount: "-14.95",
                currency: "EUR",
              },
              transactionId: "20220627392991432496",
            },
            {
              bankTransactionCode: "CCRD-POSD",
              bookingDate: "2022-06-27",
              creditorName: "TAMBOSI H'ugo's GmbH",
              proprietaryBankTransactionCode: "KOO",
              transactionAmount: {
                amount: "-50.00",
                currency: "EUR",
              },
              transactionId: "20220627392991591092",
            },
            {
              bankTransactionCode: "CCRD-POSD",
              bookingDate: "2022-06-27",
              creditorName: "HSL Mobiili",
              proprietaryBankTransactionCode: "KOO",
              transactionAmount: {
                amount: "-2.50",
                currency: "EUR",
              },
              transactionId: "20220627392991498154",
            },
            {
              bankTransactionCode: "CCRD-POSD",
              bookingDate: "2022-06-27",
              creditorName: "OAK BARREL 3013007",
              proprietaryBankTransactionCode: "KOO",
              transactionAmount: {
                amount: "-10.00",
                currency: "EUR",
              },
              transactionId: "20220627392991776276",
            },
            {
              bankTransactionCode: "CCRD-POSD",
              bookingDate: "2022-06-27",
              creditorName: "Verwaltung der Residenz M",
              proprietaryBankTransactionCode: "KOO",
              transactionAmount: {
                amount: "-16.00",
                currency: "EUR",
              },
              transactionId: "20220627392991431975",
            },
          ],
          pending: [],
        },
      },
    },
  ];

  return (
    <div>
      <div className={classes.barchart}>
        <BarChart />
      </div>
      <Piechart />
    </div>
  );
}

export default App;
