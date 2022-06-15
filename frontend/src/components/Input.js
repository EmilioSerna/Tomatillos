import { useField } from 'formik';

const Input = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <div>
            <input {...field} {...props} />
            {meta.touched && meta.error ? (
                <h1>{meta.error}</h1>
            ) : null}
        </div>
    );
};

export default Input;