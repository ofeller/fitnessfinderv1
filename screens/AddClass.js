import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Alert } from "react-native";
import { Table, TableWrapper, Row, Cell } from "react-native-table-component";
import styled from "styled-components";

export default class AddClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ["Class", "Time", "Length", "Add"],
      tableData: [
        ["Interval Training", "10:00am", "45", ""],
        ["Cycle", "12:15pm", "45", ""],
        ["Core", "1:15pm", "45", ""],
        ["Total Body", "5:00pm", "45", ""],
        ["Hip Hop Fitness", "5:15pm", "60", ""],
        ["Cycle", "6:00pm", "45", ""],
        ["Kickboxing", "6:30pm", "60", ""],
        ["Hip Hop Fitness", "8:00pm", "60", ""],
        ["Total Body", "8:30pm", "45", ""],
        ["Power Yoga", "9:30pm", "60", ""]
      ],
    };
  }

  static navigationOptions = {
    header: null
  };
  _alertIndex(index) {
    Alert.alert(`Class added!\nTotal Body\nTuesday 10/25/22 5:00pm`);
  }

  render() {
    const state = this.state;
    const element = (data, index) => (
      <TouchableOpacity onPress={() => this._alertIndex(index)}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>+</Text>
        </View>
      </TouchableOpacity>
    );

    return (
      <View style={styles.container}>

        <Title>Classes 10/25/22</Title>
        <Table borderStyle={{ borderWidth: 1 }}>
          <Row
            data={state.tableHead}
            style={styles.head}
            textStyle={styles.text}
          />
          {state.tableData.map((rowData, index) => (
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
    paddingTop: 30,
    paddingBottom: 30,
    backgroundColor: "#f0f3f5"
  },
  head: { height: 40, backgroundColor: "#489fb5" },
  text: { margin: 6, fontSize: 16 },
  row: { flexDirection: "row", backgroundColor: "white" },
  btn: {
    width: 58,
    height: 18,
    backgroundColor: "black",
    borderRadius: 2,
    alignSelf: "center"
  },
  btnText: { textAlign: "center", color: "#fff" }
});