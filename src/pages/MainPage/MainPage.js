import CategoryList from '../../components/CategoryList/CategoryList';
import DiscountList from '../../components/DiscountList/DiscountList';
import DiscountForm from "../../components/DiscountForm/DiscountForm"
import MainWelcome from '../../components/MainWelcome/MainWelcome';


function MainPage() {
    return ( 
      <>
        <MainWelcome/>
        <CategoryList/>
        <DiscountForm/>
        <DiscountList/>
      </>
     );
}

export default MainPage;