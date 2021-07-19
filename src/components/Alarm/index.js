import React from "react"
import {
    Button,
    Divider,
    Actionsheet,
    useDisclose,
    Center,
    NativeBaseProvider,
} from "native-base"

export function AlarmList() {
    const { isOpen, onOpen, onClose } = useDisclose()
    return (
    <>
        <Button onPress={onOpen}>Lista de Alarmes</Button>

        <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
            <Divider borderColor="gray.300" />
            <Actionsheet.Item _text={{color: "blue.500",}}> Alarme 1</Actionsheet.Item>
            <Divider borderColor="gray.300" />
            <Actionsheet.Item _text={{color: "blue.500",}}> Alarme 2</Actionsheet.Item>
            <Divider borderColor="gray.300" />
            <Actionsheet.Item _text={{color: "blue.500",}}> Alarme 3</Actionsheet.Item>
            <Divider borderColor="gray.300" />
            <Actionsheet.Item _text={{color: "blue.500",}}> Alarme 4</Actionsheet.Item>
        </Actionsheet.Content>
    </Actionsheet>
    </>
)
}

const Alarm = ()  =>(
    <NativeBaseProvider>
        <Center flex={1}>
            <AlarmList />
        </Center>
    </NativeBaseProvider>
);

export default Alarm;

