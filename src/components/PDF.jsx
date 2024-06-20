import {
  Page,
  Text,
  Document,
  Image,
  StyleSheet,
  View,
} from "@react-pdf/renderer";
import nextLogo from "../nextjslogo.png";

const styles = StyleSheet.create({
  page: { backgroundColor: "tomato" },
  title: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
  },
  section: {
    margin: 10,
    padding: 10,
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "black",
  },
});

function PDF() {
  return (
    <Document>
      <Page style={styles.page}>
        <Text style={styles.title}>Hello World</Text>
        <View style={styles.section}>
          <Image src={nextLogo}></Image>
          <Text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque
            numquam tempora, eveniet quibusdam animi tenetur architecto
            delectus, nisi a nemo deserunt itaque cupiditate saepe! Quo
            obcaecati veniam debitis eius facere, nisi reprehenderit ex.
            Delectus temporibus rerum eos amet repellat! Nisi praesentium ad
            reiciendis veniam hic! Magnam cum praesentium iure et.
          </Text>
        </View>
        <View style={styles.pageNumber}>
          <Text
            render={({ pageNumber, totalPages }) =>
              `${pageNumber} / ${totalPages}`
            }
            fixed
          />
        </View>
      </Page>
      <Page style={styles.page}>
        <Text style={styles.title}>Hello World</Text>
        <View style={styles.section}>
          <Image src={nextLogo}></Image>
          <Text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque
            numquam tempora, eveniet quibusdam animi tenetur architecto
            delectus, nisi a nemo deserunt itaque cupiditate saepe! Quo
            obcaecati veniam debitis eius facere, nisi reprehenderit ex.
            Delectus temporibus rerum eos amet repellat! Nisi praesentium ad
            reiciendis veniam hic! Magnam cum praesentium iure et.
          </Text>
        </View>
        <View style={styles.pageNumber}>
          <Text
            render={({ pageNumber, totalPages }) =>
              `${pageNumber} / ${totalPages}`
            }
            fixed
          />
        </View>
      </Page>
    </Document>
  );
}

export default PDF;
