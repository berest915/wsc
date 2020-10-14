import React, { useRef, useEffect } from 'react';
import Chevron from './Chevron';
import { AccordionSection, AccordionTitle, AccordionContent } from './Styles';

const Accordion = props => {
	const { isOpen, onClickIndex, toggleOpenClose } = props;

	const contentRef = useRef(null);

	useEffect(() => {
		contentRef.current.style.maxHeight = isOpen
			? `${contentRef.current.scrollHeight}px`
			: '0px';
	}, [contentRef, isOpen]);

	return (
		<>
			<AccordionSection>
				<AccordionTitle isOpen={isOpen} onClick={() => toggleOpenClose(onClickIndex)}>
					<Chevron isOpen={isOpen} width={10} fill={'#777'} />
					<p>{props.title}</p>
				</AccordionTitle>

				<AccordionContent ref={contentRef}>{props.children}</AccordionContent>
			</AccordionSection>
		</>
	);
};

export default Accordion;
