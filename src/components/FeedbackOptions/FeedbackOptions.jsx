import PropTypes from 'prop-types';

export const FeedbackOptions = ({options, onButtonClick}) => {

    return (
        <div>
            {options.map(option => (
                <button key={option} type="button" onClick={() =>onButtonClick (option)}>{option}</button>               
            ))}

        </div>
    )

}

FeedbackOptions.propTypes = {
    option: PropTypes.string,

}