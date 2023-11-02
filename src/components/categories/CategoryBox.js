
import qs from 'query-string';
import { useSearchParams } from "react-router-dom";
import { useCallback, useEffect } from "react";
const CategoryBox = ({
  icon: Icon,
  label,
  selected,
}) => {
  // const router = useRouter();
  const [params] = useSearchParams();
  let [searchParams, setSearchParams] = useSearchParams();
  useEffect(()=>{
    setSearchParams('/?qs=&')
  },[])
  const handleClick = useCallback(() => {
    let currentQuery = {};
    
    if (params) {
      currentQuery = qs.parse(params.toString())
    }

    const updatedQuery = {
      ...currentQuery,
      category: label
    }

    if (params?.get('category') === label) {
      delete updatedQuery.category;
    }

    const url = qs.stringifyUrl({
      url: '/',
      query: updatedQuery
    }, { skipNull: true });
    console.log(url)
    setSearchParams(url.toString())
    // router.push(url);
  }, []);

  return ( 
    <div
      onClick={handleClick}
      className={`
        flex 
        flex-col 
        items-center 
        justify-center 
        gap-2
        p-3
        border-b-2
        hover:text-neutral-800
        transition
        cursor-pointer
        ${selected ? 'border-b-neutral-800' : 'border-transparent'}
        ${selected ? 'text-neutral-800' : 'text-neutral-500'}
      `}
    >
      <Icon size={26} />
      <div className="font-medium text-sm">
        {label}
      </div>
    </div>
   );
}
 
export default CategoryBox;