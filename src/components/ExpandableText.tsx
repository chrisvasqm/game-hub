import { Text, Button } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
    children: string;
}

function ExpandableText({ children }: Props) {
    const [expanded, setExpanded] = useState(false);
    const limit = 300;

    if (!children) return null;

    if (children.length <= limit)
        return <Text>{children}</Text>

    const summary = expanded ? children : children.slice(0, limit) + '...';

    return <>
        <Text>{summary}
            <Button
                marginLeft={2}
                size={'sm'}
                colorScheme={'yellow'}
                fontWeight={'bold'}
                onClick={() => setExpanded(!expanded)}>
                {expanded ? 'Show Less' : 'Read More'}
            </Button>
        </Text>

    </>
}

export default ExpandableText;