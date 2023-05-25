import * as React from 'react';
import rehypeReact from 'rehype-react';
import ImageWithCaption from '../components/ImageWithCaption';
import ImageWithClass from './ImageWithClass';
import Meetings from '../components/Meetings';
import PictureWithQuotes from '../components/PictureWithQuotes';
import QuestionAnswer from '../components/QuestionAnswer';
import ResponsiveImage from '../components/ResponsiveImage';
import SingleReportYear from '../components/SingleReportYear';
import SingleStaffListEntry from '../components/SingleStaffListEntry';
import SingleStaffMember from '../components/SingleStaffMember';

export default function MainText({ html }) {
	return renderAst(html);
}
const renderAst = new rehypeReact({
	createElement: React.createElement,
	components: {
		'image-with-caption': ImageWithCaption,
		'image-with-class': ImageWithClass,
		'meetings': Meetings,
		'picture-with-quotes': PictureWithQuotes,
		'question-answer': QuestionAnswer,
		'responsive-image': ResponsiveImage,
		'single-report-year': SingleReportYear,
		'single-staff-list-entry': SingleStaffListEntry,
		'single-staff-member': SingleStaffMember,
	},
}).Compiler;
