import { useEffect, useState } from "react";
import { environment } from "../environment/environment";

export const useTeamHooks = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${environment.BASE_URL}team`);
      const data = await response.json();
      setState(data);
    };
    fetchData();
  }, []);

  return state;
};

export const useCurrentTeamDetailHook = (teamName) => {
  const [state, setState] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${environment.BASE_URL}/team/${teamName}`);
      const data = await response.json();
      setState(data);
    };
    fetchData();
  }, [teamName]);

  return state;
};
