import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Chart from './pages/Chart';
import ECommerce from './pages/Dashboard/ECommerce';
import FormElements from './pages/Form/FormElements';
import FormLayout from './pages/Form/FormLayout';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Tables from './pages/Tables';
import Buttons from './pages/UiElements/Buttons';
import DefaultLayout from './layout/DefaultLayout';
import Surveys from './pages/Dashboard/surveys';
import Mysurveys from './pages/Tienda/mySurveys';
import Flash from './pages/Tienda/Flash';
import Banners from './pages/Tienda/Banners';
import Categories from './pages/Tienda/Categories';
import Coupons from './pages/Tienda/Coupons';
import Items from './pages/Tienda/Items';
import SendPoints from './pages/TransaccionesSmart/SendPoints';
import RedeemPoints from './pages/TransaccionesSmart/RedeemPoints';
import RedeemCoupon from './pages/TransaccionesSmart/RedeemCoupon';
import Movements from './pages/TransaccionesSmart/Movements';
import PushNotifications from './pages/InteraccionesSmart/PushNotifications';
import UserNearby from './pages/InteraccionesSmart/UserNearby';
import MerchantNetwork from './pages/InteraccionesSmart/MerchantNetwork';
import Roles from './pages/Employees/Roles';
import Employees from './pages/Employees/Employees';
import Premium from './pages/premium';
import DashboardSuperAdmin from './pages/Dashboard/DashboardSuperAdmin';
import WalletUser from './pages/GestionClientes/WalletUser';
import SmartUsers from './pages/GestionClientes/SmartUsers';
import ZoneManagement from './pages/GestionZonas/ZoneManagement';
import ManagementCategory from './pages/GestionCategoria/ManagementCategory';
import BannersSmart from './pages/SocialPuntosSmart/BannersSmart';
import CompanyInformation from './pages/GestionEmpresarial/CompanyInformation';
import NotificacionesSmart from './pages/SocialPuntosSmart/NotificacionesSmart';
import TermsConditions from './pages/GestionEmpresarial/TermsConditions';
import PrivacyPolicy from './pages/GestionEmpresarial/PrivacyPolicy';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <DefaultLayout>
      <Routes>
        <Route
          index
          element={
            <>
              <PageTitle title="eCommerce Dashboard | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <ECommerce />
            </>
          }
        />
        <Route
          path="/encuestas-smart"
          element={
            <>
              <PageTitle title="Encuestas Smart | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Surveys />
            </>
          }
        />
        <Route
          path="/dashboard-super-admin"
          element={
            <>
              <PageTitle title="Encuestas Smart | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <DashboardSuperAdmin />
            </>
          }
        />
        <Route
          path="/billetera-usuario"
          element={
            <>
              <PageTitle title="Billetera de Usuario | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <WalletUser />
            </>
          }
        />
        <Route
          path="/usuarios-smart"
          element={
            <>
              <PageTitle title="Usuarios Smart | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <SmartUsers />
            </>
          }
        />
        <Route
          path="/gestion-zona"
          element={
            <>
              <PageTitle title="Usuarios Smart | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <ZoneManagement />
            </>
          }
        />
        <Route
          path="/gestion-categoria"
          element={
            <>
              <PageTitle title="Usuarios Smart | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <ManagementCategory />
            </>
          }
        />
        <Route
          path="/smartBanners"
          element={
            <>
              <PageTitle title="Usuarios Smart | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <BannersSmart />
            </>
          }
        />
        <Route
          path="/notificaciones-smart"
          element={
            <>
              <PageTitle title="Usuarios Smart | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <NotificacionesSmart />
            </>
          }
        />
        <Route
          path="/informacion-empresa"
          element={
            <>
              <PageTitle title="Usuarios Smart | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <CompanyInformation />
            </>
          }
        />
        <Route
          path="/politicas-privacidad"
          element={
            <>
              <PageTitle title="Usuarios Smart | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <PrivacyPolicy />
            </>
          }
        />
        <Route
          path="/terminos-condiciones"
          element={
            <>
              <PageTitle title="Usuarios Smart | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <TermsConditions />
            </>
          }
        />
        <Route
          path="/categorias"
          element={
            <>
              <PageTitle title="Categorias | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Categories />
            </>
          }
        />
        <Route
          path="/items"
          element={
            <>
              <PageTitle title="Items | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Items />
            </>
          }
        />
        <Route
          path="/cupones"
          element={
            <>
              <PageTitle title="Cupones | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Coupons />
            </>
          }
        />
        <Route
          path="/mis-encuestas"
          element={
            <>
              <PageTitle title="Encuestas | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Mysurveys />
            </>
          }
        />
        <Route
          path="/oferta-flash"
          element={
            <>
              <PageTitle title="Oferta Flash | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Flash />
            </>
          }
        />
        <Route
          path="/banners"
          element={
            <>
              <PageTitle title="Banners | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Banners />
            </>
          }
        />
        <Route
          path="/enviar-puntos"
          element={
            <>
              <PageTitle title="Enviar Puntos | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <SendPoints />
            </>
          }
        />
        <Route
          path="/canjear-puntos"
          element={
            <>
              <PageTitle title="Canjear Puntos | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <RedeemPoints />
            </>
          }
        />
        <Route
          path="/canjear-cupon"
          element={
            <>
              <PageTitle title="Canjear Cupon | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <RedeemCoupon />
            </>
          }
        />
        <Route
          path="/premium"
          element={
            <>
              <PageTitle title="Suscripciones Smart | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Premium />
            </>
          }
        />
        <Route
          path="/mis-movimientos"
          element={
            <>
              <PageTitle title="Mis Movimientos | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Movements />
            </>
          }
        />
        <Route
          path="/roles"
          element={
            <>
              <PageTitle title="Mis Movimientos | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Roles />
            </>
          }
        />
        <Route
          path="/empleados"
          element={
            <>
              <PageTitle title="Mis Movimientos | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Employees />
            </>
          }
        />
        <Route
          path="/mis-movimientos"
          element={
            <>
              <PageTitle title="Mis Movimientos | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Movements />
            </>
          }
        />
        <Route
          path="/notificaciones-push"
          element={
            <>
              <PageTitle title="Calendar | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <PushNotifications />
            </>
          }
        />
        <Route
          path="/usuario-cerca"
          element={
            <>
              <PageTitle title="Calendar | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <UserNearby />
            </>
          }
        />
        <Route
          path="/red-comercios"
          element={
            <>
              <PageTitle title="Calendar | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <MerchantNetwork />
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <PageTitle title="Profile | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Profile />
            </>
          }
        />
        <Route
          path="/forms/form-elements"
          element={
            <>
              <PageTitle title="Form Elements | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <FormElements />
            </>
          }
        />
        <Route
          path="/forms/form-layout"
          element={
            <>
              <PageTitle title="Form Layout | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <FormLayout />
            </>
          }
        />
        <Route
          path="/tables"
          element={
            <>
              <PageTitle title="Tables | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Tables />
            </>
          }
        />
        <Route
          path="/settings"
          element={
            <>
              <PageTitle title="Settings | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Settings />
            </>
          }
        />
        <Route
          path="/chart"
          element={
            <>
              <PageTitle title="Basic Chart | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Chart />
            </>
          }
        />
        <Route
          path="/ui/buttons"
          element={
            <>
              <PageTitle title="Buttons | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Buttons />
            </>
          }
        />
        <Route
          path="/auth/signin"
          element={
            <>
              <PageTitle title="Signin | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <SignIn />
            </>
          }
        />
        <Route
          path="/auth/signup"
          element={
            <>
              <PageTitle title="Signup | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <SignUp />
            </>
          }
        />
      </Routes>
    </DefaultLayout>
  );
}

export default App;
