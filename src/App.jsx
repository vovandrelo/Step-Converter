import "@mantine/core/styles.css";
import "@mantine/tiptap/styles.css";
import {Box, Button, Container, Group, MantineProvider, Stack} from "@mantine/core";

import {theme} from "./theme";
import {CustomEditor} from "./Editor.jsx";
import {useState} from "react";
import {useCustomEditor} from "./hooks.js";

export default function App() {
    const [editorData, setEditorData] = useState()
    const editor = useCustomEditor();

    const onClickHandler = () => {
        setEditorData(JSON.stringify(editor?.getJSON()))
    }

    return <MantineProvider theme={theme}>
        <Container size="md">
            <Stack>
                <CustomEditor editor={editor}/>
                <Group justify="center">
                    <Button onClick={onClickHandler} variant="filled" color="pink">Получить JSON</Button>
                </Group>
                <Box>{editorData}</Box>
            </Stack>
        </Container>
    </MantineProvider>;
}
