import React from "react";
import "./App.css";
import NavBar from "./components/header";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./components/login";
import LandingPage from "./components/landingPage";
import Register from "./components/individualUser/IndividualSignup";
import auth from "./services/authService";
import Logout from "./components/logout";

import RegisterB2B from "./components/b2bClient/B2BSignup";
import RegisterWillAmbassador from "./components/WillAmbSignup";

import AdminLogin from "./components/adminControls/adminLogin";
import RegisterOrgUser from "./components/adminControls/OrganisationUserSignup";
import AdminMainPage from "./components/adminControls/adminPage";
import FlyerForm from "./components/adminControls/flyerForm";
import SetupDiscount from "./components/adminControls/setupDiscount";
import ManageUsers from "./components/adminControls/manageUsers";
import InvoiceListing from "./components/adminControls/invoiceListing";

import WillAHomePage from "./components/WillAmbHome";
import FlyerListing from "./components/flyerListing";
import CommissionListing from "./components/comListing";
import BalanceRequest from "./components/balanceReq";

import RegWillListing from "./components/individualUser/regWillListing";
import RegDocument from "./components/registeredDocuments/regDocument";
import Details from "./common/willDetail";
import listRegDoc from "./components/registeredDocuments/listRegDoc";
import EditDoc from "./components/registeredDocuments/editDocument";
import SearchForm from "./components/products/basicSearch";

import MultiStepForm from "./components/products/BasicWill/MultiStepForm";
import EmployeeVoucherPopPage from "./components/b2bClient/EmpVouPopPage";
import VoucherListing from "./components/VoucherListing";
import EmployeeVoucherInvoiceCreation from "./components/adminControls/invoiceCreation";
import Payment from "./components/adminControls/paymentID";
import Flyer from "./components/adminControls/flyer";
import VoucherDetails from "./components/voucherDetails";
import ExecWillForm from "./components/products/execWill";
import testCom from "./components/testCom";
import InHome from "./components/individualUser/home";
import Checkout from "./components/products/BasicWill/payment";
import ProbateWillForm from "./components/products/probateReg";
import OrgUserHomePage from "./components/orgUserHome";
import B2BHome from "./components/b2bClient/b2bHome";
import TransactionList from "./components/b2bClient/transactionList";
import OrgUserListing from "./components/adminControls/orgListing";
import B2BVouchers from "./components/adminControls/b2bvouchers";
import ProductsPrice from "./components/adminControls/productsPrice";
import ProductsList from "./components/adminControls/ProductsListing";
import EditOrgUser from "./components/adminControls/editOrgUser";
import Transactions from "./components/adminControls/b2btransactions";
import B2bIndividualVoucherList from "./components/b2bClient/vouchersList";
import Sales from "./components/adminControls/sales";
import BalanceRequests from "./components/adminControls/balanceReq";
import WillCreationForm from "./components/products/willcreation/willCreationForm";
import EditFlyer from "./components/adminControls/editFlyer";
import EditDiscount from "./components/adminControls/editDiscount";
import CreatedWills from "./components/individualUser/Will";
import ViewSales from "./components/ViewSales";
import AmbBalanceRequests from "./components/Org Users/AmbBalReq";

import ManageWill from "./components/products/manageWill/manageWill";
import AddCodicil from "./components/products/manageWill/addCodicil";

import ViewWillPDF from "./components/products/manageWill/viewWillPDF";
import ViewCodicils from "./components/products/manageWill/viewCodicils";
import ViewCodicilPDF from "./components/products/manageWill/viewCodicilPDF";
import ManageProfile from "./components/individualUser/manageProfile";
import AddDocuments from "./components/products/manageWill/addDocuments";
import ViewDocuments from "./components/products/manageWill/viewDocuments";
import ViewAllVoucherInvoices from "./components/adminControls/viewAllVoucherInvoices";
import ViewTransactionPDF from "./components/viewTransactionPDF";
import ViewRegisteredWillPDF from "./components/products/manageWill/viewRegisteredWillPDF";

import AddCodicilRegWill from "./components/products/registeredWillCodicil/AddCodicilRegWill";
import ManageWivesDetailsRegWill from "./components/products/registeredWillCodicil/ManageWivesDetailsRegWill";
import ManageExecutorDetailsRegWill from "./components/products/registeredWillCodicil/ManageExecutorDetailsRegWill";
import ManageChildrenRegWill from "./components/products/registeredWillCodicil/ManageChildrenRegWill";
import ManageGuardianDetailsRegWill from "./components/products/registeredWillCodicil/ManageGuardianDetailsRegWill";
import ManageDistributionDetailsRegWill from "./components/products/registeredWillCodicil/ManageDistributionDetailsRegWill";
import ManageRemainderDetailsRegWill from "./components/products/registeredWillCodicil/ManageRemainderDetailsRegWill";
import ManageOtherDetailsRegWill from "./components/products/registeredWillCodicil/ManageOtherDetailsRegWill";
import ManagePetDetailsRegWill from "./components/products/registeredWillCodicil/ManagePetDetailsRegWill";
import ManageBurialDetailsRegWill from "./components/products/registeredWillCodicil/ManageBurialDetailsRegWill";
import ManageAdditionDetailsRegWill from "./components/products/registeredWillCodicil/ManageAdditionDetailsRegWill";
import ManageSigningDetailsRegWill from "./components/products/registeredWillCodicil/ManageSigningDetailsRegWill";

// Deed of gift imports
import DeedofGift from "./components/products/DeedofGift/DeedofGift";
import ViewDeedofGift from "./components/products/DeedofGift/ViewDeedofGift";
import PrintDeedOfGift from "./components/products/DeedofGift/PrintDeedOfGift";

// Living trust Imports
import LivingTrust from "./components/products/LivingTrust/LivingTrust";
import ViewLivingTrust from "./components/products/LivingTrust/ViewLivingTrust";
import PrintLivingTrust from "./components/products/LivingTrust/PrintLivingTrust";

// Muslim Will Creation Imports
import MuslimWillCreation from "./components/products/willcreation/MuslimWillCreation/MuslimWillCreation";
import NonMuslimWillCreation from "./components/products/willcreation/NonMuslimWillCreation/NonMuslimWillCreation";

// Muslim Codicil Imports
import MuslimCodicil from "./components/products/manageWill/AddMuslimCodicil/MuslimCodicil";

import NonMuslimCodicil from "./components/products/manageWill/AddNonMuslimCodicil/NonMuslimCodicil";

class App extends React.Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }
  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
    console.log(user);
  }

  callAPI() {
    fetch(process.env.REACT_APP_API_URL)
      .then((res) => console.log("connectd"))
      .then((res) => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
    this.callAPI();
  }
  render() {
    const { user } = this.state;
    return (
      <React.Fragment>
        <NavBar user={user} />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
          <Route path="/home" component={LandingPage} />

          <Route path="/admin/login" component={AdminLogin} />
          <Route path="/adminhome" component={AdminMainPage} />
          <Route
            path="/register/orgaisationalUsers"
            component={RegisterOrgUser}
          />
          <Route path="/admin/create-flyer" component={FlyerForm} />
          <Route path="/admin/flyer" component={Flyer} />
          <Route path="/admin/balance-request" component={BalanceRequest} />
          <Route path="/admin/setup-discount" component={SetupDiscount} />
          <Route path="/admin/manageusers" component={ManageUsers} />
          <Route
            path="/admin/create-invoice"
            component={EmployeeVoucherInvoiceCreation}
          />
          <Route path="/admin/invoice-listing" component={InvoiceListing} />
          <Route path="/admin/products-listing" component={ProductsList} />
          <Route path="/admin/transactions" component={Transactions} />
          <Route path="/admin/sales" component={Sales} />
          <Route path="/admin/managebalance" component={BalanceRequests} />
          <Route path="/admin/org-user-listing" component={OrgUserListing} />
          <Route path="/admin/edit-flyer/" component={EditFlyer} />
          <Route path="/edit-discount/:id" component={EditDiscount} />
          <Route path="/invoice" component={Payment} />
          <Route path="/will/balance-request" component={AmbBalanceRequests} />

          <Route path="/product/will-creation" component={WillCreationForm} />

          <Route path="/will-listing" component={RegWillListing} />
          <Route path="/details" component={Details} />
          <Route path="/listregisteredDoc" component={listRegDoc} />
          <Route path="/registerdocument" component={RegDocument} />
          <Route path="/edit" component={EditDoc} />
          <Route path="/checkout" component={Checkout} />

          <Route
            path="/form"
            render={(props) => <MultiStepForm user={user} {...props} />}
          />

          <Route path="/commission-listing" component={CommissionListing} />

          <Route
            path="/register/will-ambassador"
            component={RegisterWillAmbassador}
          />
          <Route
            path="/will-ambassador/home"
            render={(props) => <WillAHomePage user={user} {...props} />}
          />
          <Route
            path="/will-ambassador/flyer-listing"
            render={(props) => <FlyerListing user={user} {...props} />}
          />

          <Route path="/register/indivdualUser" component={Register} />
          <Route path="/register/B2B" component={RegisterB2B} />
          <Route path="/individualuser/home" component={InHome} />

          <Route path="/products/willcreation" component={WillCreationForm} />
          {/* Standard Will */}
          <Route
            path="/willcreation/personal_will_creation"
            component={NonMuslimWillCreation}
          />

          {/* Muslim Will */}
          <Route
            path="/willcreation/muslim_will_creation"
            component={MuslimWillCreation}
          />

          {/* Muslim Codicil */}
          <Route
            path="/managewill/addcodicil_muslim"
            component={MuslimCodicil}
          />

          {/* Updated Wali */}
          <Route path="/products/managewill" component={ManageWill} />
          <Route path="/managewill/addcodicil" component={AddCodicil} />
          <Route
            path="/managewill/addcodicil_nonmuslim"
            component={NonMuslimCodicil}
          />

          <Route path="/managewill/viewwillpdf" component={ViewWillPDF} />
          <Route path="/managewill/viewcodicils" component={ViewCodicils} />
          <Route path="/managewill/codicil" component={ViewCodicilPDF} />

          <Route path="/managewill/adddocuments" component={AddDocuments} />
          <Route path="/managewill/viewdocuments" component={ViewDocuments} />

          <Route path="/view_transaction_pdf" component={ViewTransactionPDF} />

          <Route
            path="/managewill/viewregisteredwillpdf"
            component={ViewRegisteredWillPDF}
          />

          <Route
            path="/managewill/addcodicilregwill"
            component={AddCodicilRegWill}
          />
          <Route
            path="/managewill/wivesregwill"
            component={ManageWivesDetailsRegWill}
          />
          <Route
            path="/managewill/executorregwill"
            component={ManageExecutorDetailsRegWill}
          />
          <Route
            path="/managewill/childrenregwill"
            component={ManageChildrenRegWill}
          />
          <Route
            path="/managewill/guardianregwill"
            component={ManageGuardianDetailsRegWill}
          />
          <Route
            path="/managewill/distributionregwill"
            component={ManageDistributionDetailsRegWill}
          />
          <Route
            path="/managewill/remainder-of-estateregwill"
            component={ManageRemainderDetailsRegWill}
          />
          <Route
            path="/managewill/othersregwill"
            component={ManageOtherDetailsRegWill}
          />
          <Route
            path="/managewill/petregwill"
            component={ManagePetDetailsRegWill}
          />
          <Route
            path="/managewill/burialregwill"
            component={ManageBurialDetailsRegWill}
          />
          <Route
            path="/managewill/additionalregwill"
            component={ManageAdditionDetailsRegWill}
          />
          <Route
            path="/managewill/signingregwill"
            component={ManageSigningDetailsRegWill}
          />

          {/* deed of gift routes */}
          <Route path="/managewill/adddeedofgift" component={DeedofGift} />
          <Route path="/managewill/viewdeedofgift" component={ViewDeedofGift} />
          <Route
            path="/managewill/print_deed_of_gift"
            component={PrintDeedOfGift}
          />

          {/* living trust routes */}
          <Route path="/managewill/addlivingtrust" component={LivingTrust} />
          <Route
            path="/managewill/viewlivingtrust"
            component={ViewLivingTrust}
          />
          <Route
            path="/managewill/print_living_trust"
            component={PrintLivingTrust}
          />

          <Route
            path="/individualuser/manageprofile"
            render={(props) => <ManageProfile user={user} {...props} />}
          />

          <Route path="/mywill" component={CreatedWills} />

          <Route path="/ambassador/sales" component={ViewSales} />

          <Route path="/search" component={SearchForm} />

          <Route path="/voucherlisting" component={VoucherListing} />
          <Route path="/voucherdetail" component={VoucherDetails} />
          <Route path="/voucherpage" component={EmployeeVoucherPopPage} />
          <Route path="/b2bhome" component={B2BHome} />

          <Route path="/execform" component={ExecWillForm} />
          <Route path="/probateform" component={ProbateWillForm} />
          <Route path="/test" component={testCom} />
          <Route
            path="/orguserhome"
            render={(props) => <OrgUserHomePage user={user} {...props} />}
          />
          <Route
            path="/transactionlist"
            render={(props) => <TransactionList user={user} {...props} />}
          />

          <Route path="/b2bvouchers" component={B2BVouchers} />
          <Route
            path="/viewallvoucherinvoices"
            component={ViewAllVoucherInvoices}
          />
          <Route path="/productsprice" component={ProductsPrice} />
          <Route path="/editorguser" component={EditOrgUser} />
          <Route
            path="/b2b/voucherslist"
            render={(props) => (
              <B2bIndividualVoucherList user={user} {...props} />
            )}
          />


          <Redirect from="/" exact to="/home" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
