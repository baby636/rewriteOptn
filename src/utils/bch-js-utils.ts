import BCHJS from "@psf/bch-js";

const BCHN_MAINNET = 'https://bchn.fullstack.cash/v4/'
const TESTNET3 = 'https://testnet3.fullstack.cash/v4/'

const bchjs = new BCHJS({
    // restURL: "https://testnet3.fullstack.cash/v4/"
    // apiToken:
    //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlOGUzMGU2MDIyMWMxMDAxMmFkOTQwNyIsImVtYWlsIjoibGlnaHRzd2FybUBnbWFpbC5jb20iLCJhcGlMZXZlbCI6MCwicmF0ZUxpbWl0IjozLCJpYXQiOjE1OTgwNTc4NjUsImV4cCI6MTYwMDY0OTg2NX0.fy9g4MedNl4-NweF1NPzmGF0R1SExE0OjoWz0UA5N3o"
});

export { bchjs };
