import React from 'react';

const RowContent = ({row}) => {
  const { text, link } = row

	return (
		<>
			<div className='row'>
				<a href={link} alt=''>
					{text}
				</a>
			</div>
		</>
	);
};

export default RowContent;
