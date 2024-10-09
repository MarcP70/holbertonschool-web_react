import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';

const headerStyle = {
  backgroundColor: '#deb5b545'
};

const rowStyle = {
  backgroundColor: '#f5f5f5ab'
};

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  // React Hook to handle the checkbox state
  const [isChecked, setIsChecked] = useState(false);

  // Function to toggle checkbox state
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  // Determine the row style based on isHeader and isChecked state
  const style = isChecked ? styles.rowChecked : isHeader ? headerStyle : rowStyle;

  return (
    <tr style={style}>
      {isHeader ? (
        textSecondCell === null ? (
          <th className={css(styles.thFirstChild, styles.th)} colSpan="2">{textFirstCell}</th>
        ) : (
          <>
            <th className={css(styles.th)}>{textFirstCell}</th>
            <th className={css(styles.th)}>{textSecondCell}</th>
          </>
        )
      ) : (
        <>
          <td>
            <input
              type="checkbox"
              onChange={handleCheckboxChange}
              checked={isChecked}
            />
            {textFirstCell}
          </td>
          <td>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
};

// Default props
CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null
};

// PropTypes
CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

const styles = StyleSheet.create({
  thFirstChild: {
    textAlign: 'center',
  },
  th: {
    padding: '.4rem 0',
    borderBottom: 'solid 2px rgb(227, 220, 220)',
  },
  rowChecked: {
    backgroundColor: '#e6e4e4',
  },
});

export default CourseListRow;
