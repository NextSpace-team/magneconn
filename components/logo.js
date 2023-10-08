import Link from "next/link";
import { Text } from "@chakra-ui/react";
import styled from "@emotion/styled";

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 40px;
  display: flex;
  align-items: flex-start;
  height: 25px;
  line-height: 20px;
  color: "_yellow";
  padding-bottom: 1.5rem;
`;

const Logo = () => {
  return (
    (
      <Link href="/" scroll={false}>
        <LogoBox>
          <Text
            color="_yellow"
            fontFamily='Ubuntu, sans-serif'
            fontWeight="bold"
            ml={3}
          >
            Magneconn
          </Text>
        </LogoBox>
      </Link>
    )
  );
};

export default Logo;
