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
	const currentYear = currentDate.getFullYear();

	return (
		<Footer className="container">
			<div className="inner-container-wrapper">
				<div className="footer-inner-wrapper">
					<Flex gap="middle">
						<TwitterCircleFilled />
						<LinkedinFilled />
						<FacebookFilled />
						<InstagramFilled />
						<PinterestFilled />
					</Flex>
					<Flex gap="small" justify="center">
						<AliwangwangFilled /> <span>Webstore</span>
					</Flex>
					<Flex justify="flex-end">
						© {currentYear} Webstore. All rights reserved.
					</Flex>
				</div>
			</div>
		</Footer>
	);
}

export default FooterElement;
