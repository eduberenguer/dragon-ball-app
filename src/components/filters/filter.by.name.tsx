import style from './filter.by.name.module.scss';
import genericStyle from '../../index.module.scss';

export const FilterByName = ({
  handleChange,
}: {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <form className={style.form}>
      <input
        className={genericStyle.input}
        type="text"
        placeholder="Busca por nombre"
        onChange={handleChange}
      />
    </form>
  );
};
