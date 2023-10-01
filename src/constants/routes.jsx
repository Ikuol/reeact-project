import { FaFileInvoiceDollar, FaTools } from "react-icons/fa";
import {
  MdOutlineAccountBalanceWallet,
  MdOutlineChat,
  MdOutlineDashboard,
  MdOutlineNotifications,
  MdOutlineSettings,
  MdPersonOutline,
  MdSearch,
} from "react-icons/md";

const routes = {
  front: [
    {
      id: 1,
      name: "Dashboard",
      path: "/",
      icon: <MdOutlineDashboard size={25} />,
    },
    {
      id: 2,
      name: "Analyse",
      path: "/analyse",
      icon: <MdSearch size={25} />,
    },
    {
      id: 3,
      name: "Demandes d'interventions",
      path: "/demande-dinterventions",
      icon: <FaTools size={24} />,
    },
    {
      id: 4,
      name: "Alertes",
      path: "/alertes",
      icon: <MdOutlineNotifications size={25} />,
    },
    {
      id: 5,
      name: "Factures",
      path: "/factures",
      icon: <FaFileInvoiceDollar size={24} />,
    },
    {
      id: 6,
      name: "Messagerie",
      path: "/messagerie",
      icon: <MdOutlineChat size={25} />,
    },
  ],
  back: [
    {
      id: 1,
      name: "Dashboard",
      path: "/dashboard",
      icon: <MdOutlineDashboard size={25} />,
    },
    {
      id: 2,
      name: "Comptes clients",
      path: "/comptes-clients",
      icon: <MdPersonOutline size={25} />,
    },
    {
      id: 3,
      name: "Demandes d'interventions",
      path: "/demande-dinterventions",
      icon: <MdSearch size={25} />,
    },
    {
      id: 4,
      name: "Factures",
      path: "/factures",
      icon: <FaFileInvoiceDollar size={24} />,
    },
    {
      id: 5,
      name: "Paramètres",
      path: "/parametres",
      icon: <MdOutlineSettings size={25} />,
    },
    {
      id: 6,
      name: "Codes Promos",
      path: "/codes-promos",
      icon: <MdOutlineAccountBalanceWallet size={25} />,
    },
    {
      id: 7,
      name: "Messagerie",
      path: "/messagerie",
      icon: <MdOutlineChat size={25} />,
    },
  ],
};

export default routes;
