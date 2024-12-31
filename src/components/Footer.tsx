import { Flex } from "antd";
import { Footer } from "antd/es/layout/layout";
import {
	AliwangwangFilled,
	TwitterCircleFilled,
	LinkedinFilled,
	FacebookFilled,
	InstagramFilled,
	PinterestFilled,
} from "@ant-design/icons";

function FooterElement() {
	const currentDate = new Date();
	let currentYear = currentDate.getFullYear();

	return (
		<Footer>
			<Flex justify="space-between">
				<Flex gap="middle">
					<TwitterCircleFilled />
					<LinkedinFilled />
					<FacebookFilled />
					<InstagramFilled />
					<PinterestFilled />
				</Flex>
				<Flex gap="small">
					<AliwangwangFilled /> <span>Webstore</span>
				</Flex>
				<p>© {currentYear} Webstore. All rights reserved.</p>
			</Flex>
		</Footer>
	);
}

export default FooterElement;
