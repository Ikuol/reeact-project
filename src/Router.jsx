import { createBrowserRouter, redirect } from "react-router-dom";

import BackofficeLayout from "layouts/BackofficeLayout/BackofficeLayout";
import DashboardLayout from "layouts/DashboardLayout/DashboardLayout";

import DevisInterventions from "views/Dashboard/Interventions/DevisInterventions";
import AnalyseResultats from "views/Dashboard/Analyse/AnalyseResultats";
import DetailsFactures from "views/Dashboard/Factures/DetailsFactures";
import Interventions from "views/Dashboard/Interventions/Interventions";
import NouveauMessage from "views/Dashboard/Messagerie/NouveauMessage";
import DetailsMessages from "views/Dashboard/Messagerie/DetailsMessages";
import Confirmation from "views/Dashboard/Interventions/Confirmation";
import Messagerie from "views/Dashboard/Messagerie/Messagerie";
import Parametres from "views/Dashboard/Parametres/Parametres";
import Factures from "views/Dashboard/Factures/Factures";
import Alertes from "views/Dashboard/Alertes/Alertes";
import Analyse from "views/Dashboard/Analyse/Analyse";
import Dashboard from "views/Dashboard/Dashboard";
import Register from "views/Register/Register";
import Success from "views/Register/Success";
import AfterRegister from "views/Register/AfterRegister";
import Login from "views/Login/Login";

import Error403 from "views/Errors/403";
import Error404 from "views/Errors/404";
import Error500 from "views/Errors/500";
import Error503 from "views/Errors/503";

import NouveauMessageAdmin from "views/Admin/Messagerie/NouveauMessageAdmin";
import BackInterventions from "views/Admin/Interventions/Interventions";
import BackDetailsFactures from "views/Admin/Factures/DetailsFactures";
import MessagerieAdmin from "views/Admin/Messagerie/MessagerieAdmin";
import Statistiques from "views/Admin/Statistiques/Statistiques";
import BackParametres from "views/Admin/Parametres/Parametres";
import BackFactures from "views/Admin/Factures/Factures";
import NouveauCode from "views/Admin/Promos/NouveauCode";
import DetailsUser from "views/Admin/Clients/DetailsUser";
import Clients from "views/Admin/Clients/Clients";
import Promos from "views/Admin/Promos/Promos";
import AddUser from "views/Admin/Clients/AddUser";
import DetailsMessagesAdmin from "views/Admin/Messagerie/DetailsMessagesAdmin";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/register-steps",
    element: <AfterRegister />,
  },
  {
    path: "/",
    loader: async () => {
      //TODO Vérifier si l'utilisateur s'est connecté d'abord, return null si tout va bien  ou le rediriger pour qu'il se connecte
      return null;
    },
    element: <DashboardLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "analyse", element: <Analyse /> },
      { path: "resultat-analyse", element: <AnalyseResultats /> },
      { path: "demande-dinterventions", element: <Interventions /> },
      {
        path: "demande-dinterventions/:interventionId/devis",
        element: <DevisInterventions />,
      },
      { path: "alertes", element: <Alertes /> },
      { path: "factures", element: <Factures /> },
      { path: "factures/:factureId", element: <DetailsFactures /> },
      { path: "messagerie", element: <Messagerie /> },
      { path: "messagerie/nouveau", element: <NouveauMessage /> },
      { path: "messagerie/:messageId", element: <DetailsMessages /> },
      { path: "parametres", element: <Parametres /> },
    ],
    errorElement: <Error404 />,
  },
  {
    path: "/admin",
    loader: async () => {
      //TODO Vérifier si l'utilisateur s'est connecté d'abord, return null si tout va bien  ou le rediriger pour qu'il se connecte
      return null;
    },
    element: <BackofficeLayout />,
    children: [
      {
        index: true,
        loader: async () => {
          return redirect("dashboard");
        },
      },
      { path: "demande-dinterventions", element: <BackInterventions /> },
      { path: "factures/:factureId", element: <BackDetailsFactures /> },
      { path: "comptes-clients/:clientId", element: <DetailsUser /> },
      {
        path: "messagerie/:messageId",
        element: <DetailsMessagesAdmin />,
      },
      { path: "messagerie/new", element: <NouveauMessageAdmin /> },
      { path: "messagerie", element: <MessagerieAdmin /> },
      { path: "codes-promos/new", element: <NouveauCode /> },
      { path: "dashboard", element: <Statistiques /> },
      { path: "comptes-clients/new", element: <AddUser /> },
      { path: "parametres", element: <BackParametres /> },
      { path: "comptes-clients", element: <Clients /> },
      { path: "factures", element: <BackFactures /> },
      { path: "codes-promos", element: <Promos /> },
    ],
  },
  { path: "/confirmation", element: <Confirmation /> },
  { path: "/register-success", element: <Success /> },
  { path: "/403", element: <Error403 /> },
  { path: "/500", element: <Error500 /> },
  { path: "/503", element: <Error503 /> },
]);

export default router;
