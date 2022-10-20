import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Alert } from "react-native";
import { Table, TableWrapper, Row, Cell } from "react-native-table-component";
import styled from "styled-components";

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ["Class", "Date", "Time"],
      tableData1: [
        ["Vinyasa Yoga", "10/21/22", "4:00pm"],
        ["Kickboxing", "10/24/22", "8:00pm"]
      ],
      tableData2: [
        ["Total Body", "10/25/22", "5:00pm"]
      ],
      tableData3: [
        ["Kickboxing", "10/24/22", "10:30am"],
        ["Cyce", "10/25/22", "6:00pm"]
      ],
    };
  }

  render() {
    const state = this.state;
    return (
      <View style={styles.container}>

        <Title>My Classes</Title>
        <Table borderStyle={{ borderWidth: 1 }}>
          <Row
            data={state.tableHead}
            style={styles.head}
            textStyle={styles.text}
          />
          {state.tableData1.map((rowData, index) => (
            <TableWrapper key={index} style={styles.row}>
              {rowData.map((cellData, cellIndex) => (
                <Cell
                  key={cellIndex}
                  data={cellIndex === 3 ? element(cellData, index) : cellData}
                  textStyle={styles.text}
                />
              ))}
            </TableWrapper>
          ))}
        </Table>

        <Title>Omar's Classes</Title>
        <Table borderStyle={{ borderWidth: 1 }}>
          <Row
            data={state.tableHead}
            style={styles.head}
            textStyle={styles.text}
          />
          {state.tableData2.map((rowData, index) => (
            <TableWrapper key={index} style={styles.row}>
              {rowData.map((cellData, cellIndex) => (
                <Cell
                  key={cellIndex}
                  data={cellIndex === 3 ? element(cellData, index) : cellData}
                  textStyle={styles.text}
                />
              ))}
            </TableWrapper>
          ))}
        </Table>

        <Title>Steven's Classes</Title>
        <Table borderStyle={{ borderWidth: 1 }}>
          <Row
            data={state.tableHead}
            style={styles.head}
            textStyle={styles.text}
          />
          {state.tableData3.map((rowData, index) => (
            <TableWrapper key={index} style={styles.row}>
              {rowData.map((cellData, cellIndex) => (
                <Cell
                  key={cellIndex}
                  data={cellIndex === 3 ? element(cellData, index) : cellData}
                  textStyle={styles.text}
                />
              ))}
            </TableWrapper>
          ))}
        </Table>

      </View>
    );
  }
}

const Title = styled.Text`
  fontSize: 20;
  color: #000000;
  font-weight: 500;
  paddingTop: 20;
  `;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f0f3f5"
  },
  head: { height: 40, backgroundColor: "#489fb5" },
  text: { margin: 6, fontSize: 16},
  row: { flexDirection: "row", backgroundColor: "white" },
});
