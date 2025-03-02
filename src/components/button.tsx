type ButtonProps = {
  url: string;
  label: string;
};

const Button = ({ url, label }: ButtonProps) => {
  return (
    <div className="flex justify-center items-center gap-3 rounded p-3 text-base font-semibold w-full bg-neutralDeep text-neutralBase">
      <a className="w-full h-full text-center" href={url}>
        {label}
      </a>
    </div>
  );
};

export default Button;
