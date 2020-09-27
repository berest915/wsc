import React from 'react';

const RowContent = ({row}) => {
  const { text, link } = row

	return (
		<>
			<div className='row'>
				<a href={link} rel='noopener noreferrer' target='_blank'>
					{text}
				</a>
			</div>
		</>
	);
};

export default RowContent;
