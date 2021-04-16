export const initInpostMap = () => {
  if (window.easyPackAsyncInit === undefined) {
    window.easyPackAsyncInit = () => {
      easyPack.init({
        defaultLocale: "pl",
        mapType: "osm",
        searchType: "osm",
        points: {
          types: ["parcel_locker"],
        },
        map: {
          initialTypes: ["parcel_locker"],
        },
        display: {
          showTypesFilters: false,
          showSearchBar: true,
        },
      })
    }
  }
}
