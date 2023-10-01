import { memo } from "react";
import { useForm } from "react-hook-form";
import { MdSearch } from "react-icons/md";

const SearchForm = () => {
  const { register, handleSubmit } = useForm();

  //Effectuer une action lorque la valeur change
  const onChange = (e) => {
    console.log(e.target.value);
  };

  //Exécuter une action à la soumission du formulaire
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="relative">
        <span className="absolute pl-3 inset-y-0 left-0 flex items-center text-main">
          <MdSearch size={20} />
        </span>
        <input
          type="search"
          className="rounded-[61.5px] w-[254px] pl-9 py-3 border-0 bg-gray200 placeholder:text-main focus:border-0 focus:ring-0 text-sm text-main"
          placeholder="Search here..."
          {...register("search", { required: true, onChange: onChange })}
        />
      </div>
    </form>
  );
};

export default memo(SearchForm);
