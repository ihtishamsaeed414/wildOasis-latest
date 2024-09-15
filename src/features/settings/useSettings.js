import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../services/apiCabins";

function useSettings() {
  const {
    isLoading,
    error,
    data: settings,
  } = useQuery({
    queryKey: ["settings"],
    queryFn: getSettings,
  });
  return { isLoading, error, settings };
}

export default useSettings;
