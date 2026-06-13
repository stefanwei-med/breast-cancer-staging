let stagingMode = "clinical";
const PATHOLOGIC_RULES_TSV = `
is	0	0	Any	Any	Any	Any	0
1*	0	0	1	1	1	1	IA
1*	0	0	1	1	0	1	IA
1*	0	0	1	1	1	0	IA
1*	0	0	1	1	0	0	IA
1*	0	0	1	0	1	1	IA
1*	0	0	1	0	0	1	IA
1*	0	0	1	0	1	0	IA
1*	0	0	1	0	0	0	IA
1*	0	0	2	1	1	1	IA
1*	0	0	2	1	0	1	IA
1*	0	0	2	1	1	0	IA
1*	0	0	2	1	0	0	IA
1*	0	0	2	0	1	1	IA
1*	0	0	2	0	0	1	IA
1*	0	0	2	0	1	0	IA
1*	0	0	2	0	0	0	IB
1*	0	0	3	1	1	1	IA
1*	0	0	3	1	0	1	IA
1*	0	0	3	1	1	0	IA
1*	0	0	3	1	0	0	IA
1*	0	0	3	0	1	1	IA
1*	0	0	3	0	0	1	IA
1*	0	0	3	0	1	0	IA
1*	0	0	3	0	0	0	IB
0	1mi	0	1	1	1	1	IA
0	1mi	0	1	1	0	1	IA
0	1mi	0	1	1	1	0	IA
0	1mi	0	1	1	0	0	IA
0	1mi	0	1	0	1	1	IA
0	1mi	0	1	0	0	1	IA
0	1mi	0	1	0	1	0	IA
0	1mi	0	1	0	0	0	IA
0	1mi	0	2	1	1	1	IA
0	1mi	0	2	1	0	1	IA
0	1mi	0	2	1	1	0	IA
0	1mi	0	2	1	0	0	IA
0	1mi	0	2	0	1	1	IA
0	1mi	0	2	0	0	1	IA
0	1mi	0	2	0	1	0	IA
0	1mi	0	2	0	0	0	IB
0	1mi	0	3	1	1	1	IA
0	1mi	0	3	1	0	1	IA
0	1mi	0	3	1	1	0	IA
0	1mi	0	3	1	0	0	IA
0	1mi	0	3	0	1	1	IA
0	1mi	0	3	0	0	1	IA
0	1mi	0	3	0	1	0	IA
0	1mi	0	3	0	0	0	IB
1*	1mi	0	1	1	1	1	IA
1*	1mi	0	1	1	0	1	IA
1*	1mi	0	1	1	1	0	IA
1*	1mi	0	1	1	0	0	IA
1*	1mi	0	1	0	1	1	IA
1*	1mi	0	1	0	0	1	IA
1*	1mi	0	1	0	1	0	IA
1*	1mi	0	1	0	0	0	IA
1*	1mi	0	2	1	1	1	IA
1*	1mi	0	2	1	0	1	IA
1*	1mi	0	2	1	1	0	IA
1*	1mi	0	2	1	0	0	IA
1*	1mi	0	2	0	1	1	IA
1*	1mi	0	2	0	0	1	IA
1*	1mi	0	2	0	1	0	IA
1*	1mi	0	2	0	0	0	IB
1*	1mi	0	3	1	1	1	IA
1*	1mi	0	3	1	0	1	IA
1*	1mi	0	3	1	1	0	IA
1*	1mi	0	3	1	0	0	IA
1*	1mi	0	3	0	1	1	IA
1*	1mi	0	3	0	0	1	IA
1*	1mi	0	3	0	1	0	IA
1*	1mi	0	3	0	0	0	IB
0	1**	0	1	1	1	1	IA
0	1**	0	1	1	1	0	IB
0	1**	0	1	1	0	1	IB
0	1**	0	1	1	0	0	IIA
0	1**	0	1	0	1	1	IA
0	1**	0	1	0	1	0	IB
0	1**	0	1	0	0	1	IB
0	1**	0	1	0	0	0	IIA
0	1**	0	2	1	1	1	IA
0	1**	0	2	1	1	0	IB
0	1**	0	2	1	0	1	IB
0	1**	0	2	1	0	0	IIA
0	1**	0	2	0	1	1	IA
0	1**	0	2	0	1	0	IIA
0	1**	0	2	0	0	1	IIA
0	1**	0	2	0	0	0	IIA
0	1**	0	3	1	1	1	IA
0	1**	0	3	1	1	0	IIA
0	1**	0	3	1	0	1	IIA
0	1**	0	3	1	0	0	IIA
0	1**	0	3	0	1	1	IB
0	1**	0	3	0	1	0	IIA
0	1**	0	3	0	0	1	IIA
0	1**	0	3	0	0	0	IIA
1*	1**	0	1	1	1	1	IA
1*	1**	0	1	1	1	0	IB
1*	1**	0	1	1	0	1	IB
1*	1**	0	1	1	0	0	IIA
1*	1**	0	1	0	1	1	IA
1*	1**	0	1	0	1	0	IB
1*	1**	0	1	0	0	1	IB
1*	1**	0	1	0	0	0	IIA
1*	1**	0	2	1	1	1	IA
1*	1**	0	2	1	1	0	IB
1*	1**	0	2	1	0	1	IB
1*	1**	0	2	1	0	0	IIA
1*	1**	0	2	0	1	1	IA
1*	1**	0	2	0	1	0	IIA
1*	1**	0	2	0	0	1	IIA
1*	1**	0	2	0	0	0	IIA
1*	1**	0	3	1	1	1	IA
1*	1**	0	3	1	1	0	IIA
1*	1**	0	3	1	0	1	IIA
1*	1**	0	3	1	0	0	IIA
1*	1**	0	3	0	1	1	IB
1*	1**	0	3	0	1	0	IIA
1*	1**	0	3	0	0	1	IIA
1*	1**	0	3	0	0	0	IIA
2	0	0	1	1	1	1	IA
2	0	0	1	1	1	0	IB
2	0	0	1	1	0	1	IB
2	0	0	1	1	0	0	IIA
2	0	0	1	0	1	1	IA
2	0	0	1	0	1	0	IB
2	0	0	1	0	0	1	IB
2	0	0	1	0	0	0	IIA
2	0	0	2	1	1	1	IA
2	0	0	2	1	1	0	IB
2	0	0	2	1	0	1	IB
2	0	0	2	1	0	0	IIA
2	0	0	2	0	1	1	IA
2	0	0	2	0	1	0	IIA
2	0	0	2	0	0	1	IIA
2	0	0	2	0	0	0	IIA
2	0	0	3	1	1	1	IA
2	0	0	3	1	1	0	IIA
2	0	0	3	1	0	1	IIA
2	0	0	3	1	0	0	IIA
2	0	0	3	0	1	1	IB
2	0	0	3	0	1	0	IIA
2	0	0	3	0	0	1	IIA
2	0	0	3	0	0	0	IIA
2	1***	0	1	1	1	1	IA
2	1***	0	1	1	1	0	IIB
2	1***	0	1	1	0	1	IIB
2	1***	0	1	1	0	0	IIB
2	1***	0	1	0	1	1	IA
2	1***	0	1	0	1	0	IIB
2	1***	0	1	0	0	1	IIB
2	1***	0	1	0	0	0	IIB
2	1***	0	2	1	1	1	IB
2	1***	0	2	1	1	0	IIB
2	1***	0	2	1	0	1	IIB
2	1***	0	2	1	0	0	IIB
2	1***	0	2	0	1	1	IB
2	1***	0	2	0	1	0	IIB
2	1***	0	2	0	0	1	IIB
2	1***	0	2	0	0	0	IIB
2	1***	0	3	1	1	1	IB
2	1***	0	3	1	1	0	IIB
2	1***	0	3	1	0	1	IIB
2	1***	0	3	1	0	0	IIB
2	1***	0	3	0	1	1	IIA
2	1***	0	3	0	1	0	IIB
2	1***	0	3	0	0	1	IIB
2	1***	0	3	0	0	0	IIIA
3	0	0	1	1	1	1	IA
3	0	0	1	1	1	0	IIB
3	0	0	1	1	0	1	IIB
3	0	0	1	1	0	0	IIB
3	0	0	1	0	1	1	IA
3	0	0	1	0	1	0	IIB
3	0	0	1	0	0	1	IIB
3	0	0	1	0	0	0	IIB
3	0	0	2	1	1	1	IB
3	0	0	2	1	1	0	IIB
3	0	0	2	1	0	1	IIB
3	0	0	2	1	0	0	IIB
3	0	0	2	0	1	1	IB
3	0	0	2	0	1	0	IIB
3	0	0	2	0	0	1	IIB
3	0	0	2	0	0	0	IIB
3	0	0	3	1	1	1	IB
3	0	0	3	1	1	0	IIB
3	0	0	3	1	0	1	IIB
3	0	0	3	1	0	0	IIB
3	0	0	3	0	1	1	IIA
3	0	0	3	0	1	0	IIB
3	0	0	3	0	0	1	IIB
3	0	0	3	0	0	0	IIIA
0	2	0	1	1	1	1	IB
0	2	0	1	1	1	0	IIIA
0	2	0	1	1	0	1	IIIA
0	2	0	1	1	0	0	IIIA
0	2	0	1	0	1	1	IB
0	2	0	1	0	1	0	IIIA
0	2	0	1	0	0	1	IIIA
0	2	0	1	0	0	0	IIIA
0	2	0	2	1	1	1	IB
0	2	0	2	1	1	0	IIIA
0	2	0	2	1	0	1	IIIA
0	2	0	2	1	0	0	IIIA
0	2	0	2	0	1	1	IB
0	2	0	2	0	1	0	IIIA
0	2	0	2	0	0	1	IIIA
0	2	0	2	0	0	0	IIIB
0	2	0	3	1	1	1	IIA
0	2	0	3	1	1	0	IIIA
0	2	0	3	1	0	1	IIIA
0	2	0	3	1	0	0	IIIA
0	2	0	3	0	1	1	IIB
0	2	0	3	0	1	0	IIIA
0	2	0	3	0	0	1	IIA
0	2	0	3	0	0	0	IIIC
1*	2	0	1	1	1	1	IB
1*	2	0	1	1	1	0	IIIA
1*	2	0	1	1	0	1	IIIA
1*	2	0	1	1	0	0	IIIA
1*	2	0	1	0	1	1	IB
1*	2	0	1	0	1	0	IIIA
1*	2	0	1	0	0	1	IIIA
1*	2	0	1	0	0	0	IIIA
1*	2	0	2	1	1	1	IB
1*	2	0	2	1	1	0	IIIA
1*	2	0	2	1	0	1	IIIA
1*	2	0	2	1	0	0	IIIA
1*	2	0	2	0	1	1	IB
1*	2	0	2	0	1	0	IIIA
1*	2	0	2	0	0	1	IIIA
1*	2	0	2	0	0	0	IIIB
1*	2	0	3	1	1	1	IIA
1*	2	0	3	1	1	0	IIIA
1*	2	0	3	1	0	1	IIIA
1*	2	0	3	1	0	0	IIIA
1*	2	0	3	0	1	1	IIB
1*	2	0	3	0	1	0	IIIA
1*	2	0	3	0	0	1	IIA
1*	2	0	3	0	0	0	IIIC
2	2	0	1	1	1	1	IB
2	2	0	1	1	1	0	IIIA
2	2	0	1	1	0	1	IIIA
2	2	0	1	1	0	0	IIIA
2	2	0	1	0	1	1	IB
2	2	0	1	0	1	0	IIIA
2	2	0	1	0	0	1	IIIA
2	2	0	1	0	0	0	IIIA
2	2	0	2	1	1	1	IB
2	2	0	2	1	1	0	IIIA
2	2	0	2	1	0	1	IIIA
2	2	0	2	1	0	0	IIIA
2	2	0	2	0	1	1	IB
2	2	0	2	0	1	0	IIIA
2	2	0	2	0	0	1	IIIA
2	2	0	2	0	0	0	IIIB
2	2	0	3	1	1	1	IIA
2	2	0	3	1	1	0	IIIA
2	2	0	3	1	0	1	IIIA
2	2	0	3	1	0	0	IIIA
2	2	0	3	0	1	1	IIB
2	2	0	3	0	1	0	IIIA
2	2	0	3	0	0	1	IIA
2	2	0	3	0	0	0	IIIC
3	1***	0	1	1	1	1	IB
3	1***	0	1	1	1	0	IIIA
3	1***	0	1	1	0	1	IIIA
3	1***	0	1	1	0	0	IIIA
3	1***	0	1	0	1	1	IB
3	1***	0	1	0	1	0	IIIA
3	1***	0	1	0	0	1	IIIA
3	1***	0	1	0	0	0	IIIA
3	1***	0	2	1	1	1	IB
3	1***	0	2	1	1	0	IIIA
3	1***	0	2	1	0	1	IIIA
3	1***	0	2	1	0	0	IIIA
3	1***	0	2	0	1	1	IB
3	1***	0	2	0	1	0	IIIA
3	1***	0	2	0	0	1	IIIA
3	1***	0	2	0	0	0	IIIB
3	1***	0	3	1	1	1	IIA
3	1***	0	3	1	1	0	IIIA
3	1***	0	3	1	0	1	IIIA
3	1***	0	3	1	0	0	IIIA
3	1***	0	3	0	1	1	IIB
3	1***	0	3	0	1	0	IIIA
3	1***	0	3	0	0	1	IIA
3	1***	0	3	0	0	0	IIIC
3	2	0	1	1	1	1	IB
3	2	0	1	1	1	0	IIIA
3	2	0	1	1	0	1	IIIA
3	2	0	1	1	0	0	IIIA
3	2	0	1	0	1	1	IB
3	2	0	1	0	1	0	IIIA
3	2	0	1	0	0	1	IIIA
3	2	0	1	0	0	0	IIIA
3	2	0	2	1	1	1	IB
3	2	0	2	1	1	0	IIIA
3	2	0	2	1	0	1	IIIA
3	2	0	2	1	0	0	IIIA
3	2	0	2	0	1	1	IB
3	2	0	2	0	1	0	IIIA
3	2	0	2	0	0	1	IIIA
3	2	0	2	0	0	0	IIIB
3	2	0	3	1	1	1	IIA
3	2	0	3	1	1	0	IIIA
3	2	0	3	1	0	1	IIIA
3	2	0	3	1	0	0	IIIA
3	2	0	3	0	1	1	IIB
3	2	0	3	0	1	0	IIIA
3	2	0	3	0	0	1	IIA
3	2	0	3	0	0	0	IIIC
4	0	0	1	1	1	1	IIIA
4	0	0	1	1	1	0	IIIB
4	0	0	1	1	0	1	IIIB
4	0	0	1	1	0	0	IIIB
4	0	0	1	0	1	1	IIIA
4	0	0	1	0	1	0	IIIB
4	0	0	1	0	0	1	IIIB
4	0	0	1	0	0	0	IIIB
4	0	0	2	1	1	1	IIIA
4	0	0	2	1	1	0	IIIB
4	0	0	2	1	0	1	IIIB
4	0	0	2	1	0	0	IIIB
4	0	0	2	0	1	1	IIIA
4	0	0	2	0	1	0	IIIB
4	0	0	2	0	0	1	IIIB
4	0	0	2	0	0	0	IIIC
4	0	0	3	1	1	1	IIIB
4	0	0	3	1	1	0	IIIB
4	0	0	3	1	0	1	IIIB
4	0	0	3	1	0	0	IIIB
4	0	0	3	0	1	1	IIIB
4	0	0	3	0	1	0	IIIC
4	0	0	3	0	0	1	IIIC
4	0	0	3	0	0	0	IIIC
4	1***	0	1	1	1	1	IIIA
4	1***	0	1	1	1	0	IIIB
4	1***	0	1	1	0	1	IIIB
4	1***	0	1	1	0	0	IIIB
4	1***	0	1	0	1	1	IIIA
4	1***	0	1	0	1	0	IIIB
4	1***	0	1	0	0	1	IIIB
4	1***	0	1	0	0	0	IIIB
4	1***	0	2	1	1	1	IIIA
4	1***	0	2	1	1	0	IIIB
4	1***	0	2	1	0	1	IIIB
4	1***	0	2	1	0	0	IIIB
4	1***	0	2	0	1	1	IIIA
4	1***	0	2	0	1	0	IIIB
4	1***	0	2	0	0	1	IIIB
4	1***	0	2	0	0	0	IIIC
4	1***	0	3	1	1	1	IIIB
4	1***	0	3	1	1	0	IIIB
4	1***	0	3	1	0	1	IIIB
4	1***	0	3	1	0	0	IIIB
4	1***	0	3	0	1	1	IIIB
4	1***	0	3	0	1	0	IIIC
4	1***	0	3	0	0	1	IIIC
4	1***	0	3	0	0	0	IIIC
4	2	0	1	1	1	1	IIIA
4	2	0	1	1	1	0	IIIB
4	2	0	1	1	0	1	IIIB
4	2	0	1	1	0	0	IIIB
4	2	0	1	0	1	1	IIIA
4	2	0	1	0	1	0	IIIB
4	2	0	1	0	0	1	IIIB
4	2	0	1	0	0	0	IIIB
4	2	0	2	1	1	1	IIIA
4	2	0	2	1	1	0	IIIB
4	2	0	2	1	0	1	IIIB
4	2	0	2	1	0	0	IIIB
4	2	0	2	0	1	1	IIIA
4	2	0	2	0	1	0	IIIB
4	2	0	2	0	0	1	IIIB
4	2	0	2	0	0	0	IIIC
4	2	0	3	1	1	1	IIIB
4	2	0	3	1	1	0	IIIB
4	2	0	3	1	0	1	IIIB
4	2	0	3	1	0	0	IIIB
4	2	0	3	0	1	1	IIIB
4	2	0	3	0	1	0	IIIC
4	2	0	3	0	0	1	IIIC
4	2	0	3	0	0	0	IIIC
Any	3	0	1	1	1	1	IIIA
Any	3	0	1	1	1	0	IIIB
Any	3	0	1	1	0	1	IIIB
Any	3	0	1	1	0	0	IIIB
Any	3	0	1	0	1	1	IIIA
Any	3	0	1	0	1	0	IIIB
Any	3	0	1	0	0	1	IIIB
Any	3	0	1	0	0	0	IIIB
Any	3	0	2	1	1	1	IIIA
Any	3	0	2	1	1	0	IIIB
Any	3	0	2	1	0	1	IIIB
Any	3	0	2	1	0	0	IIIB
Any	3	0	2	0	1	1	IIIA
Any	3	0	2	0	1	0	IIIB
Any	3	0	2	0	0	1	IIIB
Any	3	0	2	0	0	0	IIIC
Any	3	0	3	1	1	1	IIIB
Any	3	0	3	1	1	0	IIIB
Any	3	0	3	1	0	1	IIIB
Any	3	0	3	1	0	0	IIIB
Any	3	0	3	0	1	1	IIIB
Any	3	0	3	0	1	0	IIIC
Any	3	0	3	0	0	1	IIIC
Any	3	0	3	0	0	0	IIIC
Any	Any	1	Any	Any	Any	Any	IV
`;

function parseRuleTSV(tsv) {
  return tsv
    .trim()
    .split("\n")
    .map(line => {
      const parts = line.trim().split(/\t+/);

      return {
        T: parts[0],
        N: parts[1],
        M: parts[2],
        Grade: parts[3],
        HER2: parts[4],
        ER: parts[5],
        PR: parts[6],
        Prognostic: parts[7]
      };
    });
}

const PATHOLOGIC_RULES = parseRuleTSV(PATHOLOGIC_RULES_TSV);
  
const CLINICAL_RULES = [
  {
    "T": "is",
    "N": "0",
    "M": "0",
    "Grade": "Any",
    "HER2": "Any",
    "ER": "Any",
    "PR": "Any",
    "Prognostic": "0"
  },
  {
    "T": "1*",
    "N": "0",
    "M": "0",
    "Grade": "1",
    "HER2": "1",
    "ER": "1",
    "PR": "1",
    "Prognostic": "IA"
  },
  {
    "T": "1*",
    "N": "0",
    "M": "0",
    "Grade": "1",
    "HER2": "1",
    "ER": "0",
    "PR": "1",
    "Prognostic": "IA"
  },
  {
    "T": "1*",
    "N": "0",
    "M": "0",
    "Grade": "1",
    "HER2": "1",
    "ER": "1",
    "PR": "0",
    "Prognostic": "IA"
  },
  {
    "T": "1*",
    "N": "0",
    "M": "0",
    "Grade": "1",
    "HER2": "1",
    "ER": "0",
    "PR": "0",
    "Prognostic": "IA"
  },
  {
    "T": "1*",
    "N": "0",
    "M": "0",
    "Grade": "1",
    "HER2": "0",
    "ER": "1",
    "PR": "1",
    "Prognostic": "IA"
  },
  {
    "T": "1*",
    "N": "0",
    "M": "0",
    "Grade": "1",
    "HER2": "0",
    "ER": "0",
    "PR": "1",
    "Prognostic": "IA"
  },
  {
    "T": "1*",
    "N": "0",
    "M": "0",
    "Grade": "1",
    "HER2": "0",
    "ER": "1",
    "PR": "0",
    "Prognostic": "IA"
  },
  {
    "T": "1*",
    "N": "0",
    "M": "0",
    "Grade": "1",
    "HER2": "0",
    "ER": "0",
    "PR": "0",
    "Prognostic": "IB"
  },
  {
    "T": "1*",
    "N": "0",
    "M": "0",
    "Grade": "2",
    "HER2": "1",
    "ER": "1",
    "PR": "1",
    "Prognostic": "IA"
  },
  {
    "T": "1*",
    "N": "0",
    "M": "0",
    "Grade": "2",
    "HER2": "1",
    "ER": "0",
    "PR": "1",
    "Prognostic": "IA"
  },
  {
    "T": "1*",
    "N": "0",
    "M": "0",
    "Grade": "2",
    "HER2": "1",
    "ER": "1",
    "PR": "0",
    "Prognostic": "IA"
  },
  {
    "T": "1*",
    "N": "0",
    "M": "0",
    "Grade": "2",
    "HER2": "1",
    "ER": "0",
    "PR": "0",
    "Prognostic": "IA"
  },
  {
    "T": "1*",
    "N": "0",
    "M": "0",
    "Grade": "2",
    "HER2": "0",
    "ER": "1",
    "PR": "1",
    "Prognostic": "IA"
  },
  {
    "T": "1*",
    "N": "0",
    "M": "0",
    "Grade": "2",
    "HER2": "0",
    "ER": "0",
    "PR": "1",
    "Prognostic": "IA"
  },
  {
    "T": "1*",
    "N": "0",
    "M": "0",
    "Grade": "2",
    "HER2": "0",
    "ER": "1",
    "PR": "0",
    "Prognostic": "IA"
  },
  {
    "T": "1*",
    "N": "0",
    "M": "0",
    "Grade": "2",
    "HER2": "0",
    "ER": "0",
    "PR": "0",
    "Prognostic": "IB"
  },
  {
    "T": "1*",
    "N": "0",
    "M": "0",
    "Grade": "3",
    "HER2": "1",
    "ER": "1",
    "PR": "1",
    "Prognostic": "IA"
  },
  {
    "T": "1*",
    "N": "0",
    "M": "0",
    "Grade": "3",
    "HER2": "1",
    "ER": "0",
    "PR": "1",
    "Prognostic": "IA"
  },
  {
    "T": "1*",
    "N": "0",
    "M": "0",
    "Grade": "3",
    "HER2": "1",
    "ER": "1",
    "PR": "0",
    "Prognostic": "IA"
  },
  {
    "T": "1*",
    "N": "0",
    "M": "0",
    "Grade": "3",
    "HER2": "1",
    "ER": "0",
    "PR": "0",
    "Prognostic": "IA"
  },
  {
    "T": "1*",
    "N": "0",
    "M": "0",
    "Grade": "3",
    "HER2": "0",
    "ER": "1",
    "PR": "1",
    "Prognostic": "IA"
  },
  {
    "T": "1*",
    "N": "0",
    "M": "0",
    "Grade": "3",
    "HER2": "0",
    "ER": "0",
    "PR": "1",
    "Prognostic": "IB"
  },
  {
    "T": "1*",
    "N": "0",
    "M": "0",
    "Grade": "3",
    "HER2": "0",
    "ER": "1",
    "PR": "0",
    "Prognostic": "IB"
  },
  {
    "T": "1*",
    "N": "0",
    "M": "0",
    "Grade": "3",
    "HER2": "0",
    "ER": "0",
    "PR": "0",
    "Prognostic": "IB"
  },
  {
    "T": "0",
    "N": "1mi",
    "M": "0",
    "Grade": "1",
    "HER2": "1",
    "ER": "1",
    "PR": "1",
    "Prognostic": "IA"
  },
  {
    "T": "0",
    "N": "1mi",
    "M": "0",
    "Grade": "1",
    "HER2": "1",
    "ER": "0",
    "PR": "1",
    "Prognostic": "IA"
  },
  {
    "T": "0",
    "N": "1mi",
    "M": "0",
    "Grade": "1",
    "HER2": "1",
    "ER": "1",
    "PR": "0",
    "Prognostic": "IA"
  },
  {
    "T": "0",
    "N": "1mi",
    "M": "0",
    "Grade": "1",
    "HER2": "1",
    "ER": "0",
    "PR": "0",
    "Prognostic": "IA"
  },
  {
    "T": "0",
    "N": "1mi",
    "M": "0",
    "Grade": "1",
    "HER2": "0",
    "ER": "1",
    "PR": "1",
    "Prognostic": "IA"
  },
  {
    "T": "0",
    "N": "1mi",
    "M": "0",
    "Grade": "1",
    "HER2": "0",
    "ER": "0",
    "PR": "1",
    "Prognostic": "IA"
  },
  {
    "T": "0",
    "N": "1mi",
    "M": "0",
    "Grade": "1",
    "HER2": "0",
    "ER": "1",
    "PR": "0",
    "Prognostic": "IA"
  },
  {
    "T": "0",
    "N": "1mi",
    "M": "0",
    "Grade": "1",
    "HER2": "0",
    "ER": "0",
    "PR": "0",
    "Prognostic": "IB"
  },
  {
    "T": "0",
    "N": "1mi",
    "M": "0",
    "Grade": "2",
    "HER2": "1",
    "ER": "1",
    "PR": "1",
    "Prognostic": "IA"
  },
  {
    "T": "0",
    "N": "1mi",
    "M": "0",
    "Grade": "2",
    "HER2": "1",
    "ER": "0",
    "PR": "1",
    "Prognostic": "IA"
  },
  {
    "T": "0",
    "N": "1mi",
    "M": "0",
    "Grade": "2",
    "HER2": "1",
    "ER": "1",
    "PR": "0",
    "Prognostic": "IA"
  },
  {
    "T": "0",
    "N": "1mi",
    "M": "0",
    "Grade": "2",
    "HER2": "1",
    "ER": "0",
    "PR": "0",
    "Prognostic": "IA"
  },
  {
    "T": "0",
    "N": "1mi",
    "M": "0",
    "Grade": "2",
    "HER2": "0",
    "ER": "1",
    "PR": "1",
    "Prognostic": "IA"
  },
  {
    "T": "0",
    "N": "1mi",
    "M": "0",
    "Grade": "2",
    "HER2": "0",
    "ER": "0",
    "PR": "1",
    "Prognostic": "IA"
  },
  {
    "T": "0",
    "N": "1mi",
    "M": "0",
    "Grade": "2",
    "HER2": "0",
    "ER": "1",
    "PR": "0",
    "Prognostic": "IA"
  },
  {
    "T": "0",
    "N": "1mi",
    "M": "0",
    "Grade": "2",
    "HER2": "0",
    "ER": "0",
    "PR": "0",
    "Prognostic": "IB"
  },
  {
    "T": "0",
    "N": "1mi",
    "M": "0",
    "Grade": "3",
    "HER2": "1",
    "ER": "1",
    "PR": "1",
    "Prognostic": "IA"
  },
  {
    "T": "0",
    "N": "1mi",
    "M": "0",
    "Grade": "3",
    "HER2": "1",
    "ER": "0",
    "PR": "1",
    "Prognostic": "IA"
  },
  {
    "T": "0",
    "N": "1mi",
    "M": "0",
    "Grade": "3",
    "HER2": "1",
    "ER": "1",
    "PR": "0",
    "Prognostic": "IA"
  },
  {
    "T": "0",
    "N": "1mi",
    "M": "0",
    "Grade": "3",
    "HER2": "1",
    "ER": "0",
    "PR": "0",
    "Prognostic": "IA"
  },
  {
    "T": "0",
    "N": "1mi",
    "M": "0",
    "Grade": "3",
    "HER2": "0",
    "ER": "1",
    "PR": "1",
    "Prognostic": "IA"
  },
  {
    "T": "0",
    "N": "1mi",
    "M": "0",
    "Grade": "3",
    "HER2": "0",
    "ER": "0",
    "PR": "1",
    "Prognostic": "IB"
  },
  {
    "T": "0",
    "N": "1mi",
    "M": "0",
    "Grade": "3",
    "HER2": "0",
    "ER": "1",
    "PR": "0",
    "Prognostic": "IB"
  },
  {
    "T": "0",
    "N": "1mi",
    "M": "0",
    "Grade": "3",
    "HER2": "0",
    "ER": "0",
    "PR": "0",
    "Prognostic": "IB"
  },
  {
    "T": "1*",
    "N": "1mi",
    "M": "0",
    "Grade": "1",
    "HER2": "1",
    "ER": "1",
    "PR": "1",
    "Prognostic": "IA"
  },
  {
    "T": "1*",
    "N": "1mi",
    "M": "0",
    "Grade": "1",
    "HER2": "1",
    "ER": "0",
    "PR": "1",
    "Prognostic": "IA"
  },
  {
    "T": "1*",
    "N": "1mi",
    "M": "0",
    "Grade": "1",
    "HER2": "1",
    "ER": "1",
    "PR": "0",
    "Prognostic": "IA"
  },
  {
    "T": "1*",
    "N": "1mi",
    "M": "0",
    "Grade": "1",
    "HER2": "1",
    "ER": "0",
    "PR": "0",
    "Prognostic": "IA"
  },
  {
    "T": "1*",
    "N": "1mi",
    "M": "0",
    "Grade": "1",
    "HER2": "0",
    "ER": "1",
    "PR": "1",
    "Prognostic": "IA"
  },
  {
    "T": "1*",
    "N": "1mi",
    "M": "0",
    "Grade": "1",
    "HER2": "0",
    "ER": "0",
    "PR": "1",
    "Prognostic": "IA"
  },
  {
    "T": "1*",
    "N": "1mi",
    "M": "0",
    "Grade": "1",
    "HER2": "0",
    "ER": "1",
    "PR": "0",
    "Prognostic": "IA"
  },
  {
    "T": "1*",
    "N": "1mi",
    "M": "0",
    "Grade": "1",
    "HER2": "0",
    "ER": "0",
    "PR": "0",
    "Prognostic": "IB"
  },
  {
    "T": "1*",
    "N": "1mi",
    "M": "0",
    "Grade": "2",
    "HER2": "1",
    "ER": "1",
    "PR": "1",
    "Prognostic": "IA"
  },
  {
    "T": "1*",
    "N": "1mi",
    "M": "0",
    "Grade": "2",
    "HER2": "1",
    "ER": "0",
    "PR": "1",
    "Prognostic": "IA"
  },
  {
    "T": "1*",
    "N": "1mi",
    "M": "0",
    "Grade": "2",
    "HER2": "1",
    "ER": "1",
    "PR": "0",
    "Prognostic": "IA"
  },
  {
    "T": "1*",
    "N": "1mi",
    "M": "0",
    "Grade": "2",
    "HER2": "1",
    "ER": "0",
    "PR": "0",
    "Prognostic": "IA"
  },
  {
    "T": "1*",
    "N": "1mi",
    "M": "0",
    "Grade": "2",
    "HER2": "0",
    "ER": "1",
    "PR": "1",
    "Prognostic": "IA"
  },
  {
    "T": "1*",
    "N": "1mi",
    "M": "0",
    "Grade": "2",
    "HER2": "0",
    "ER": "0",
    "PR": "1",
    "Prognostic": "IA"
  },
  {
    "T": "1*",
    "N": "1mi",
    "M": "0",
    "Grade": "2",
    "HER2": "0",
    "ER": "1",
    "PR": "0",
    "Prognostic": "IA"
  },
  {
    "T": "1*",
    "N": "1mi",
    "M": "0",
    "Grade": "2",
    "HER2": "0",
    "ER": "0",
    "PR": "0",
    "Prognostic": "IB"
  },
  {
    "T": "1*",
    "N": "1mi",
    "M": "0",
    "Grade": "3",
    "HER2": "1",
    "ER": "1",
    "PR": "1",
    "Prognostic": "IA"
  },
  {
    "T": "1*",
    "N": "1mi",
    "M": "0",
    "Grade": "3",
    "HER2": "1",
    "ER": "0",
    "PR": "1",
    "Prognostic": "IA"
  },
  {
    "T": "1*",
    "N": "1mi",
    "M": "0",
    "Grade": "3",
    "HER2": "1",
    "ER": "1",
    "PR": "0",
    "Prognostic": "IA"
  },
  {
    "T": "1*",
    "N": "1mi",
    "M": "0",
    "Grade": "3",
    "HER2": "1",
    "ER": "0",
    "PR": "0",
    "Prognostic": "IA"
  },
  {
    "T": "1*",
    "N": "1mi",
    "M": "0",
    "Grade": "3",
    "HER2": "0",
    "ER": "1",
    "PR": "1",
    "Prognostic": "IA"
  },
  {
    "T": "1*",
    "N": "1mi",
    "M": "0",
    "Grade": "3",
    "HER2": "0",
    "ER": "0",
    "PR": "1",
    "Prognostic": "IB"
  },
  {
    "T": "1*",
    "N": "1mi",
    "M": "0",
    "Grade": "3",
    "HER2": "0",
    "ER": "1",
    "PR": "0",
    "Prognostic": "IB"
  },
  {
    "T": "1*",
    "N": "1mi",
    "M": "0",
    "Grade": "3",
    "HER2": "0",
    "ER": "0",
    "PR": "0",
    "Prognostic": "IB"
  },
  {
    "T": "0",
    "N": "1**",
    "M": "0",
    "Grade": "1",
    "HER2": "1",
    "ER": "1",
    "PR": "1",
    "Prognostic": "IB"
  },
  {
    "T": "0",
    "N": "1**",
    "M": "0",
    "Grade": "1",
    "HER2": "1",
    "ER": "1",
    "PR": "0",
    "Prognostic": "IIA"
  },
  {
    "T": "0",
    "N": "1**",
    "M": "0",
    "Grade": "1",
    "HER2": "1",
    "ER": "0",
    "PR": "1",
    "Prognostic": "IIA"
  },
  {
    "T": "0",
    "N": "1**",
    "M": "0",
    "Grade": "1",
    "HER2": "1",
    "ER": "0",
    "PR": "0",
    "Prognostic": "IIA"
  },
  {
    "T": "0",
    "N": "1**",
    "M": "0",
    "Grade": "1",
    "HER2": "0",
    "ER": "1",
    "PR": "1",
    "Prognostic": "IB"
  },
  {
    "T": "0",
    "N": "1**",
    "M": "0",
    "Grade": "1",
    "HER2": "0",
    "ER": "1",
    "PR": "0",
    "Prognostic": "IIA"
  },
  {
    "T": "0",
    "N": "1**",
    "M": "0",
    "Grade": "1",
    "HER2": "0",
    "ER": "0",
    "PR": "1",
    "Prognostic": "IIA"
  },
  {
    "T": "0",
    "N": "1**",
    "M": "0",
    "Grade": "1",
    "HER2": "0",
    "ER": "0",
    "PR": "0",
    "Prognostic": "IIA"
  },
  {
    "T": "0",
    "N": "1**",
    "M": "0",
    "Grade": "2",
    "HER2": "1",
    "ER": "1",
    "PR": "1",
    "Prognostic": "IB"
  },
  {
    "T": "0",
    "N": "1**",
    "M": "0",
    "Grade": "2",
    "HER2": "1",
    "ER": "1",
    "PR": "0",
    "Prognostic": "IIA"
  },
  {
    "T": "0",
    "N": "1**",
    "M": "0",
    "Grade": "2",
    "HER2": "1",
    "ER": "0",
    "PR": "1",
    "Prognostic": "IIA"
  },
  {
    "T": "0",
    "N": "1**",
    "M": "0",
    "Grade": "2",
    "HER2": "1",
    "ER": "0",
    "PR": "0",
    "Prognostic": "IIA"
  },
  {
    "T": "0",
    "N": "1**",
    "M": "0",
    "Grade": "2",
    "HER2": "0",
    "ER": "1",
    "PR": "1",
    "Prognostic": "IB"
  },
  {
    "T": "0",
    "N": "1**",
    "M": "0",
    "Grade": "2",
    "HER2": "0",
    "ER": "1",
    "PR": "0",
    "Prognostic": "IIA"
  },
  {
    "T": "0",
    "N": "1**",
    "M": "0",
    "Grade": "2",
    "HER2": "0",
    "ER": "0",
    "PR": "1",
    "Prognostic": "IIA"
  },
  {
    "T": "0",
    "N": "1**",
    "M": "0",
    "Grade": "2",
    "HER2": "0",
    "ER": "0",
    "PR": "0",
    "Prognostic": "IIB"
  },
  {
    "T": "0",
    "N": "1**",
    "M": "0",
    "Grade": "3",
    "HER2": "1",
    "ER": "1",
    "PR": "1",
    "Prognostic": "IB"
  },
  {
    "T": "0",
    "N": "1**",
    "M": "0",
    "Grade": "3",
    "HER2": "1",
    "ER": "1",
    "PR": "0",
    "Prognostic": "IIA"
  },
  {
    "T": "0",
    "N": "1**",
    "M": "0",
    "Grade": "3",
    "HER2": "1",
    "ER": "0",
    "PR": "1",
    "Prognostic": "IIA"
  },
  {
    "T": "0",
    "N": "1**",
    "M": "0",
    "Grade": "3",
    "HER2": "1",
    "ER": "0",
    "PR": "0",
    "Prognostic": "IIA"
  },
  {
    "T": "0",
    "N": "1**",
    "M": "0",
    "Grade": "3",
    "HER2": "0",
    "ER": "1",
    "PR": "1",
    "Prognostic": "IIA"
  },
  {
    "T": "0",
    "N": "1**",
    "M": "0",
    "Grade": "3",
    "HER2": "0",
    "ER": "1",
    "PR": "0",
    "Prognostic": "IIB"
  },
  {
    "T": "0",
    "N": "1**",
    "M": "0",
    "Grade": "3",
    "HER2": "0",
    "ER": "0",
    "PR": "1",
    "Prognostic": "IIB"
  },
  {
    "T": "0",
    "N": "1**",
    "M": "0",
    "Grade": "3",
    "HER2": "0",
    "ER": "0",
    "PR": "0",
    "Prognostic": "IIB"
  },
  {
    "T": "1*",
    "N": "1**",
    "M": "0",
    "Grade": "1",
    "HER2": "1",
    "ER": "1",
    "PR": "1",
    "Prognostic": "IB"
  },
  {
    "T": "1*",
    "N": "1**",
    "M": "0",
    "Grade": "1",
    "HER2": "1",
    "ER": "1",
    "PR": "0",
    "Prognostic": "IIA"
  },
  {
    "T": "1*",
    "N": "1**",
    "M": "0",
    "Grade": "1",
    "HER2": "1",
    "ER": "0",
    "PR": "1",
    "Prognostic": "IIA"
  },
  {
    "T": "1*",
    "N": "1**",
    "M": "0",
    "Grade": "1",
    "HER2": "1",
    "ER": "0",
    "PR": "0",
    "Prognostic": "IIA"
  },
  {
    "T": "1*",
    "N": "1**",
    "M": "0",
    "Grade": "1",
    "HER2": "0",
    "ER": "1",
    "PR": "1",
    "Prognostic": "IB"
  },
  {
    "T": "1*",
    "N": "1**",
    "M": "0",
    "Grade": "1",
    "HER2": "0",
    "ER": "1",
    "PR": "0",
    "Prognostic": "IIA"
  },
  {
    "T": "1*",
    "N": "1**",
    "M": "0",
    "Grade": "1",
    "HER2": "0",
    "ER": "0",
    "PR": "1",
    "Prognostic": "IIA"
  },
  {
    "T": "1*",
    "N": "1**",
    "M": "0",
    "Grade": "1",
    "HER2": "0",
    "ER": "0",
    "PR": "0",
    "Prognostic": "IIA"
  },
  {
    "T": "1*",
    "N": "1**",
    "M": "0",
    "Grade": "2",
    "HER2": "1",
    "ER": "1",
    "PR": "1",
    "Prognostic": "IB"
  },
  {
    "T": "1*",
    "N": "1**",
    "M": "0",
    "Grade": "2",
    "HER2": "1",
    "ER": "1",
    "PR": "0",
    "Prognostic": "IIA"
  },
  {
    "T": "1*",
    "N": "1**",
    "M": "0",
    "Grade": "2",
    "HER2": "1",
    "ER": "0",
    "PR": "1",
    "Prognostic": "IIA"
  },
  {
    "T": "1*",
    "N": "1**",
    "M": "0",
    "Grade": "2",
    "HER2": "1",
    "ER": "0",
    "PR": "0",
    "Prognostic": "IIA"
  },
  {
    "T": "1*",
    "N": "1**",
    "M": "0",
    "Grade": "2",
    "HER2": "0",
    "ER": "1",
    "PR": "1",
    "Prognostic": "IB"
  },
  {
    "T": "1*",
    "N": "1**",
    "M": "0",
    "Grade": "2",
    "HER2": "0",
    "ER": "1",
    "PR": "0",
    "Prognostic": "IIA"
  },
  {
    "T": "1*",
    "N": "1**",
    "M": "0",
    "Grade": "2",
    "HER2": "0",
    "ER": "0",
    "PR": "1",
    "Prognostic": "IIA"
  },
  {
    "T": "1*",
    "N": "1**",
    "M": "0",
    "Grade": "2",
    "HER2": "0",
    "ER": "0",
    "PR": "0",
    "Prognostic": "IIB"
  },
  {
    "T": "1*",
    "N": "1**",
    "M": "0",
    "Grade": "3",
    "HER2": "1",
    "ER": "1",
    "PR": "1",
    "Prognostic": "IB"
  },
  {
    "T": "1*",
    "N": "1**",
    "M": "0",
    "Grade": "3",
    "HER2": "1",
    "ER": "1",
    "PR": "0",
    "Prognostic": "IIA"
  },
  {
    "T": "1*",
    "N": "1**",
    "M": "0",
    "Grade": "3",
    "HER2": "1",
    "ER": "0",
    "PR": "1",
    "Prognostic": "IIA"
  },
  {
    "T": "1*",
    "N": "1**",
    "M": "0",
    "Grade": "3",
    "HER2": "1",
    "ER": "0",
    "PR": "0",
    "Prognostic": "IIA"
  },
  {
    "T": "1*",
    "N": "1**",
    "M": "0",
    "Grade": "3",
    "HER2": "0",
    "ER": "1",
    "PR": "1",
    "Prognostic": "IIA"
  },
  {
    "T": "1*",
    "N": "1**",
    "M": "0",
    "Grade": "3",
    "HER2": "0",
    "ER": "1",
    "PR": "0",
    "Prognostic": "IIB"
  },
  {
    "T": "1*",
    "N": "1**",
    "M": "0",
    "Grade": "3",
    "HER2": "0",
    "ER": "0",
    "PR": "1",
    "Prognostic": "IIB"
  },
  {
    "T": "1*",
    "N": "1**",
    "M": "0",
    "Grade": "3",
    "HER2": "0",
    "ER": "0",
    "PR": "0",
    "Prognostic": "IIB"
  },
  {
    "T": "2",
    "N": "0",
    "M": "0",
    "Grade": "1",
    "HER2": "1",
    "ER": "1",
    "PR": "1",
    "Prognostic": "IB"
  },
  {
    "T": "2",
    "N": "0",
    "M": "0",
    "Grade": "1",
    "HER2": "1",
    "ER": "1",
    "PR": "0",
    "Prognostic": "IIA"
  },
  {
    "T": "2",
    "N": "0",
    "M": "0",
    "Grade": "1",
    "HER2": "1",
    "ER": "0",
    "PR": "1",
    "Prognostic": "IIA"
  },
  {
    "T": "2",
    "N": "0",
    "M": "0",
    "Grade": "1",
    "HER2": "1",
    "ER": "0",
    "PR": "0",
    "Prognostic": "IIA"
  },
  {
    "T": "2",
    "N": "0",
    "M": "0",
    "Grade": "1",
    "HER2": "0",
    "ER": "1",
    "PR": "1",
    "Prognostic": "IB"
  },
  {
    "T": "2",
    "N": "0",
    "M": "0",
    "Grade": "1",
    "HER2": "0",
    "ER": "1",
    "PR": "0",
    "Prognostic": "IIA"
  },
  {
    "T": "2",
    "N": "0",
    "M": "0",
    "Grade": "1",
    "HER2": "0",
    "ER": "0",
    "PR": "1",
    "Prognostic": "IIA"
  },
  {
    "T": "2",
    "N": "0",
    "M": "0",
    "Grade": "1",
    "HER2": "0",
    "ER": "0",
    "PR": "0",
    "Prognostic": "IIA"
  },
  {
    "T": "2",
    "N": "0",
    "M": "0",
    "Grade": "2",
    "HER2": "1",
    "ER": "1",
    "PR": "1",
    "Prognostic": "IB"
  },
  {
    "T": "2",
    "N": "0",
    "M": "0",
    "Grade": "2",
    "HER2": "1",
    "ER": "1",
    "PR": "0",
    "Prognostic": "IIA"
  },
  {
    "T": "2",
    "N": "0",
    "M": "0",
    "Grade": "2",
    "HER2": "1",
    "ER": "0",
    "PR": "1",
    "Prognostic": "IIA"
  },
  {
    "T": "2",
    "N": "0",
    "M": "0",
    "Grade": "2",
    "HER2": "1",
    "ER": "0",
    "PR": "0",
    "Prognostic": "IIA"
  },
  {
    "T": "2",
    "N": "0",
    "M": "0",
    "Grade": "2",
    "HER2": "0",
    "ER": "1",
    "PR": "1",
    "Prognostic": "IB"
  },
  {
    "T": "2",
    "N": "0",
    "M": "0",
    "Grade": "2",
    "HER2": "0",
    "ER": "1",
    "PR": "0",
    "Prognostic": "IIA"
  },
  {
    "T": "2",
    "N": "0",
    "M": "0",
    "Grade": "2",
    "HER2": "0",
    "ER": "0",
    "PR": "1",
    "Prognostic": "IIA"
  },
  {
    "T": "2",
    "N": "0",
    "M": "0",
    "Grade": "2",
    "HER2": "0",
    "ER": "0",
    "PR": "0",
    "Prognostic": "IIB"
  },
  {
    "T": "2",
    "N": "0",
    "M": "0",
    "Grade": "3",
    "HER2": "1",
    "ER": "1",
    "PR": "1",
    "Prognostic": "IB"
  },
  {
    "T": "2",
    "N": "0",
    "M": "0",
    "Grade": "3",
    "HER2": "1",
    "ER": "1",
    "PR": "0",
    "Prognostic": "IIA"
  },
  {
    "T": "2",
    "N": "0",
    "M": "0",
    "Grade": "3",
    "HER2": "1",
    "ER": "0",
    "PR": "1",
    "Prognostic": "IIA"
  },
  {
    "T": "2",
    "N": "0",
    "M": "0",
    "Grade": "3",
    "HER2": "1",
    "ER": "0",
    "PR": "0",
    "Prognostic": "IIA"
  },
  {
    "T": "2",
    "N": "0",
    "M": "0",
    "Grade": "3",
    "HER2": "0",
    "ER": "1",
    "PR": "1",
    "Prognostic": "IIA"
  },
  {
    "T": "2",
    "N": "0",
    "M": "0",
    "Grade": "3",
    "HER2": "0",
    "ER": "1",
    "PR": "0",
    "Prognostic": "IIB"
  },
  {
    "T": "2",
    "N": "0",
    "M": "0",
    "Grade": "3",
    "HER2": "0",
    "ER": "0",
    "PR": "1",
    "Prognostic": "IIB"
  },
  {
    "T": "2",
    "N": "0",
    "M": "0",
    "Grade": "3",
    "HER2": "0",
    "ER": "0",
    "PR": "0",
    "Prognostic": "IIB"
  },
  {
    "T": "2",
    "N": "1***",
    "M": "0",
    "Grade": "1",
    "HER2": "1",
    "ER": "1",
    "PR": "1",
    "Prognostic": "IB"
  },
  {
    "T": "2",
    "N": "1***",
    "M": "0",
    "Grade": "1",
    "HER2": "1",
    "ER": "1",
    "PR": "0",
    "Prognostic": "IIA"
  },
  {
    "T": "2",
    "N": "1***",
    "M": "0",
    "Grade": "1",
    "HER2": "1",
    "ER": "0",
    "PR": "1",
    "Prognostic": "IIA"
  },
  {
    "T": "2",
    "N": "1***",
    "M": "0",
    "Grade": "1",
    "HER2": "1",
    "ER": "0",
    "PR": "0",
    "Prognostic": "IIB"
  },
  {
    "T": "2",
    "N": "1***",
    "M": "0",
    "Grade": "1",
    "HER2": "0",
    "ER": "1",
    "PR": "1",
    "Prognostic": "IIA"
  },
  {
    "T": "2",
    "N": "1***",
    "M": "0",
    "Grade": "1",
    "HER2": "0",
    "ER": "1",
    "PR": "0",
    "Prognostic": "IIB"
  },
  {
    "T": "2",
    "N": "1***",
    "M": "0",
    "Grade": "1",
    "HER2": "0",
    "ER": "0",
    "PR": "1",
    "Prognostic": "IIB"
  },
  {
    "T": "2",
    "N": "1***",
    "M": "0",
    "Grade": "1",
    "HER2": "0",
    "ER": "0",
    "PR": "0",
    "Prognostic": "IIB"
  },
  {
    "T": "2",
    "N": "1***",
    "M": "0",
    "Grade": "2",
    "HER2": "1",
    "ER": "1",
    "PR": "1",
    "Prognostic": "IB"
  },
  {
    "T": "2",
    "N": "1***",
    "M": "0",
    "Grade": "2",
    "HER2": "1",
    "ER": "1",
    "PR": "0",
    "Prognostic": "IIA"
  },
  {
    "T": "2",
    "N": "1***",
    "M": "0",
    "Grade": "2",
    "HER2": "1",
    "ER": "0",
    "PR": "1",
    "Prognostic": "IIA"
  },
  {
    "T": "2",
    "N": "1***",
    "M": "0",
    "Grade": "2",
    "HER2": "1",
    "ER": "0",
    "PR": "0",
    "Prognostic": "IIB"
  },
  {
    "T": "2",
    "N": "1***",
    "M": "0",
    "Grade": "2",
    "HER2": "0",
    "ER": "1",
    "PR": "1",
    "Prognostic": "IIA"
  },
  {
    "T": "2",
    "N": "1***",
    "M": "0",
    "Grade": "2",
    "HER2": "0",
    "ER": "1",
    "PR": "0",
    "Prognostic": "IIB"
  },
  {
    "T": "2",
    "N": "1***",
    "M": "0",
    "Grade": "2",
    "HER2": "0",
    "ER": "0",
    "PR": "1",
    "Prognostic": "IIB"
  },
  {
    "T": "2",
    "N": "1***",
    "M": "0",
    "Grade": "2",
    "HER2": "0",
    "ER": "0",
    "PR": "0",
    "Prognostic": "IIIB"
  },
  {
    "T": "2",
    "N": "1***",
    "M": "0",
    "Grade": "3",
    "HER2": "1",
    "ER": "1",
    "PR": "1",
    "Prognostic": "IB"
  },
  {
    "T": "2",
    "N": "1***",
    "M": "0",
    "Grade": "3",
    "HER2": "1",
    "ER": "1",
    "PR": "0",
    "Prognostic": "IIB"
  },
  {
    "T": "2",
    "N": "1***",
    "M": "0",
    "Grade": "3",
    "HER2": "1",
    "ER": "0",
    "PR": "1",
    "Prognostic": "IIB"
  },
  {
    "T": "2",
    "N": "1***",
    "M": "0",
    "Grade": "3",
    "HER2": "1",
    "ER": "0",
    "PR": "0",
    "Prognostic": "IIB"
  },
  {
    "T": "2",
    "N": "1***",
    "M": "0",
    "Grade": "3",
    "HER2": "0",
    "ER": "1",
    "PR": "1",
    "Prognostic": "IIB"
  },
  {
    "T": "2",
    "N": "1***",
    "M": "0",
    "Grade": "3",
    "HER2": "0",
    "ER": "1",
    "PR": "0",
    "Prognostic": "IIIA"
  },
  {
    "T": "2",
    "N": "1***",
    "M": "0",
    "Grade": "3",
    "HER2": "0",
    "ER": "0",
    "PR": "1",
    "Prognostic": "IIIA"
  },
  {
    "T": "2",
    "N": "1***",
    "M": "0",
    "Grade": "3",
    "HER2": "0",
    "ER": "0",
    "PR": "0",
    "Prognostic": "IIIB"
  },
  {
    "T": "3",
    "N": "0",
    "M": "0",
    "Grade": "1",
    "HER2": "1",
    "ER": "1",
    "PR": "1",
    "Prognostic": "IB"
  },
  {
    "T": "3",
    "N": "0",
    "M": "0",
    "Grade": "1",
    "HER2": "1",
    "ER": "1",
    "PR": "0",
    "Prognostic": "IIA"
  },
  {
    "T": "3",
    "N": "0",
    "M": "0",
    "Grade": "1",
    "HER2": "1",
    "ER": "0",
    "PR": "1",
    "Prognostic": "IIA"
  },
  {
    "T": "3",
    "N": "0",
    "M": "0",
    "Grade": "1",
    "HER2": "1",
    "ER": "0",
    "PR": "0",
    "Prognostic": "IIB"
  },
  {
    "T": "3",
    "N": "0",
    "M": "0",
    "Grade": "1",
    "HER2": "0",
    "ER": "1",
    "PR": "1",
    "Prognostic": "IIA"
  },
  {
    "T": "3",
    "N": "0",
    "M": "0",
    "Grade": "1",
    "HER2": "0",
    "ER": "1",
    "PR": "0",
    "Prognostic": "IIB"
  },
  {
    "T": "3",
    "N": "0",
    "M": "0",
    "Grade": "1",
    "HER2": "0",
    "ER": "0",
    "PR": "1",
    "Prognostic": "IIB"
  },
  {
    "T": "3",
    "N": "0",
    "M": "0",
    "Grade": "1",
    "HER2": "0",
    "ER": "0",
    "PR": "0",
    "Prognostic": "IIB"
  },
  {
    "T": "3",
    "N": "0",
    "M": "0",
    "Grade": "2",
    "HER2": "1",
    "ER": "1",
    "PR": "1",
    "Prognostic": "IB"
  },
  {
    "T": "3",
    "N": "0",
    "M": "0",
    "Grade": "2",
    "HER2": "1",
    "ER": "1",
    "PR": "0",
    "Prognostic": "IIA"
  },
  {
    "T": "3",
    "N": "0",
    "M": "0",
    "Grade": "2",
    "HER2": "1",
    "ER": "0",
    "PR": "1",
    "Prognostic": "IIA"
  },
  {
    "T": "3",
    "N": "0",
    "M": "0",
    "Grade": "2",
    "HER2": "1",
    "ER": "0",
    "PR": "0",
    "Prognostic": "IIB"
  },
  {
    "T": "3",
    "N": "0",
    "M": "0",
    "Grade": "2",
    "HER2": "0",
    "ER": "1",
    "PR": "1",
    "Prognostic": "IIA"
  },
  {
    "T": "3",
    "N": "0",
    "M": "0",
    "Grade": "2",
    "HER2": "0",
    "ER": "1",
    "PR": "0",
    "Prognostic": "IIB"
  },
  {
    "T": "3",
    "N": "0",
    "M": "0",
    "Grade": "2",
    "HER2": "0",
    "ER": "0",
    "PR": "1",
    "Prognostic": "IIB"
  },
  {
    "T": "3",
    "N": "0",
    "M": "0",
    "Grade": "2",
    "HER2": "0",
    "ER": "0",
    "PR": "0",
    "Prognostic": "IIIB"
  },
  {
    "T": "3",
    "N": "0",
    "M": "0",
    "Grade": "3",
    "HER2": "1",
    "ER": "1",
    "PR": "1",
    "Prognostic": "IB"
  },
  {
    "T": "3",
    "N": "0",
    "M": "0",
    "Grade": "3",
    "HER2": "1",
    "ER": "1",
    "PR": "0",
    "Prognostic": "IIB"
  },
  {
    "T": "3",
    "N": "0",
    "M": "0",
    "Grade": "3",
    "HER2": "1",
    "ER": "0",
    "PR": "1",
    "Prognostic": "IIB"
  },
  {
    "T": "3",
    "N": "0",
    "M": "0",
    "Grade": "3",
    "HER2": "1",
    "ER": "0",
    "PR": "0",
    "Prognostic": "IIB"
  },
  {
    "T": "3",
    "N": "0",
    "M": "0",
    "Grade": "3",
    "HER2": "0",
    "ER": "1",
    "PR": "1",
    "Prognostic": "IIB"
  },
  {
    "T": "3",
    "N": "0",
    "M": "0",
    "Grade": "3",
    "HER2": "0",
    "ER": "1",
    "PR": "0",
    "Prognostic": "IIIA"
  },
  {
    "T": "3",
    "N": "0",
    "M": "0",
    "Grade": "3",
    "HER2": "0",
    "ER": "0",
    "PR": "1",
    "Prognostic": "IIIA"
  },
  {
    "T": "3",
    "N": "0",
    "M": "0",
    "Grade": "3",
    "HER2": "0",
    "ER": "0",
    "PR": "0",
    "Prognostic": "IIIB"
  },
  {
    "T": "0",
    "N": "2",
    "M": "0",
    "Grade": "1",
    "HER2": "1",
    "ER": "1",
    "PR": "1",
    "Prognostic": "IIA"
  },
  {
    "T": "0",
    "N": "2",
    "M": "0",
    "Grade": "1",
    "HER2": "1",
    "ER": "1",
    "PR": "0",
    "Prognostic": "IIIA"
  },
  {
    "T": "0",
    "N": "2",
    "M": "0",
    "Grade": "1",
    "HER2": "1",
    "ER": "0",
    "PR": "1",
    "Prognostic": "IIIA"
  },
  {
    "T": "0",
    "N": "2",
    "M": "0",
    "Grade": "1",
    "HER2": "1",
    "ER": "0",
    "PR": "0",
    "Prognostic": "IIIA"
  },
  {
    "T": "0",
    "N": "2",
    "M": "0",
    "Grade": "1",
    "HER2": "0",
    "ER": "1",
    "PR": "1",
    "Prognostic": "IIA"
  },
  {
    "T": "0",
    "N": "2",
    "M": "0",
    "Grade": "1",
    "HER2": "0",
    "ER": "1",
    "PR": "0",
    "Prognostic": "IIIA"
  },
  {
    "T": "0",
    "N": "2",
    "M": "0",
    "Grade": "1",
    "HER2": "0",
    "ER": "0",
    "PR": "1",
    "Prognostic": "IIIA"
  },
  {
    "T": "0",
    "N": "2",
    "M": "0",
    "Grade": "1",
    "HER2": "0",
    "ER": "0",
    "PR": "0",
    "Prognostic": "IIIB"
  },
  {
    "T": "0",
    "N": "2",
    "M": "0",
    "Grade": "2",
    "HER2": "1",
    "ER": "1",
    "PR": "1",
    "Prognostic": "IIA"
  },
  {
    "T": "0",
    "N": "2",
    "M": "0",
    "Grade": "2",
    "HER2": "1",
    "ER": "1",
    "PR": "0",
    "Prognostic": "IIIA"
  },
  {
    "T": "0",
    "N": "2",
    "M": "0",
    "Grade": "2",
    "HER2": "1",
    "ER": "0",
    "PR": "1",
    "Prognostic": "IIIA"
  },
  {
    "T": "0",
    "N": "2",
    "M": "0",
    "Grade": "2",
    "HER2": "1",
    "ER": "0",
    "PR": "0",
    "Prognostic": "IIIA"
  },
  {
    "T": "0",
    "N": "2",
    "M": "0",
    "Grade": "2",
    "HER2": "0",
    "ER": "1",
    "PR": "1",
    "Prognostic": "IIA"
  },
  {
    "T": "0",
    "N": "2",
    "M": "0",
    "Grade": "2",
    "HER2": "0",
    "ER": "1",
    "PR": "0",
    "Prognostic": "IIIA"
  },
  {
    "T": "0",
    "N": "2",
    "M": "0",
    "Grade": "2",
    "HER2": "0",
    "ER": "0",
    "PR": "1",
    "Prognostic": "IIIA"
  },
  {
    "T": "0",
    "N": "2",
    "M": "0",
    "Grade": "2",
    "HER2": "0",
    "ER": "0",
    "PR": "0",
    "Prognostic": "IIIB"
  },
  {
    "T": "0",
    "N": "2",
    "M": "0",
    "Grade": "3",
    "HER2": "1",
    "ER": "1",
    "PR": "1",
    "Prognostic": "IIB"
  },
  {
    "T": "0",
    "N": "2",
    "M": "0",
    "Grade": "3",
    "HER2": "1",
    "ER": "1",
    "PR": "0",
    "Prognostic": "IIIA"
  },
  {
    "T": "0",
    "N": "2",
    "M": "0",
    "Grade": "3",
    "HER2": "1",
    "ER": "0",
    "PR": "1",
    "Prognostic": "IIIA"
  },
  {
    "T": "0",
    "N": "2",
    "M": "0",
    "Grade": "3",
    "HER2": "1",
    "ER": "0",
    "PR": "0",
    "Prognostic": "IIIA"
  },
  {
    "T": "0",
    "N": "2",
    "M": "0",
    "Grade": "3",
    "HER2": "0",
    "ER": "1",
    "PR": "1",
    "Prognostic": "IIIA"
  },
  {
    "T": "0",
    "N": "2",
    "M": "0",
    "Grade": "3",
    "HER2": "0",
    "ER": "1",
    "PR": "0",
    "Prognostic": "IIIB"
  },
  {
    "T": "0",
    "N": "2",
    "M": "0",
    "Grade": "3",
    "HER2": "0",
    "ER": "0",
    "PR": "1",
    "Prognostic": "IIIB"
  },
  {
    "T": "0",
    "N": "2",
    "M": "0",
    "Grade": "3",
    "HER2": "0",
    "ER": "0",
    "PR": "0",
    "Prognostic": "IIIC"
  },
  {
    "T": "1*",
    "N": "2",
    "M": "0",
    "Grade": "1",
    "HER2": "1",
    "ER": "1",
    "PR": "1",
    "Prognostic": "IIA"
  },
  {
    "T": "1*",
    "N": "2",
    "M": "0",
    "Grade": "1",
    "HER2": "1",
    "ER": "1",
    "PR": "0",
    "Prognostic": "IIIA"
  },
  {
    "T": "1*",
    "N": "2",
    "M": "0",
    "Grade": "1",
    "HER2": "1",
    "ER": "0",
    "PR": "1",
    "Prognostic": "IIIA"
  },
  {
    "T": "1*",
    "N": "2",
    "M": "0",
    "Grade": "1",
    "HER2": "1",
    "ER": "0",
    "PR": "0",
    "Prognostic": "IIIA"
  },
  {
    "T": "1*",
    "N": "2",
    "M": "0",
    "Grade": "1",
    "HER2": "0",
    "ER": "1",
    "PR": "1",
    "Prognostic": "IIA"
  },
  {
    "T": "1*",
    "N": "2",
    "M": "0",
    "Grade": "1",
    "HER2": "0",
    "ER": "1",
    "PR": "0",
    "Prognostic": "IIIA"
  },
  {
    "T": "1*",
    "N": "2",
    "M": "0",
    "Grade": "1",
    "HER2": "0",
    "ER": "0",
    "PR": "1",
    "Prognostic": "IIIA"
  },
  {
    "T": "1*",
    "N": "2",
    "M": "0",
    "Grade": "1",
    "HER2": "0",
    "ER": "0",
    "PR": "0",
    "Prognostic": "IIIB"
  },
  {
    "T": "1*",
    "N": "2",
    "M": "0",
    "Grade": "2",
    "HER2": "1",
    "ER": "1",
    "PR": "1",
    "Prognostic": "IIA"
  },
  {
    "T": "1*",
    "N": "2",
    "M": "0",
    "Grade": "2",
    "HER2": "1",
    "ER": "1",
    "PR": "0",
    "Prognostic": "IIIA"
  },
  {
    "T": "1*",
    "N": "2",
    "M": "0",
    "Grade": "2",
    "HER2": "1",
    "ER": "0",
    "PR": "1",
    "Prognostic": "IIIA"
  },
  {
    "T": "1*",
    "N": "2",
    "M": "0",
    "Grade": "2",
    "HER2": "1",
    "ER": "0",
    "PR": "0",
    "Prognostic": "IIIA"
  },
  {
    "T": "1*",
    "N": "2",
    "M": "0",
    "Grade": "2",
    "HER2": "0",
    "ER": "1",
    "PR": "1",
    "Prognostic": "IIA"
  },
  {
    "T": "1*",
    "N": "2",
    "M": "0",
    "Grade": "2",
    "HER2": "0",
    "ER": "1",
    "PR": "0",
    "Prognostic": "IIIA"
  },
  {
    "T": "1*",
    "N": "2",
    "M": "0",
    "Grade": "2",
    "HER2": "0",
    "ER": "0",
    "PR": "1",
    "Prognostic": "IIIA"
  },
  {
    "T": "1*",
    "N": "2",
    "M": "0",
    "Grade": "2",
    "HER2": "0",
    "ER": "0",
    "PR": "0",
    "Prognostic": "IIIB"
  },
  {
    "T": "1*",
    "N": "2",
    "M": "0",
    "Grade": "3",
    "HER2": "1",
    "ER": "1",
    "PR": "1",
    "Prognostic": "IIB"
  },
  {
    "T": "1*",
    "N": "2",
    "M": "0",
    "Grade": "3",
    "HER2": "1",
    "ER": "1",
    "PR": "0",
    "Prognostic": "IIIA"
  },
  {
    "T": "1*",
    "N": "2",
    "M": "0",
    "Grade": "3",
    "HER2": "1",
    "ER": "0",
    "PR": "1",
    "Prognostic": "IIIA"
  },
  {
    "T": "1*",
    "N": "2",
    "M": "0",
    "Grade": "3",
    "HER2": "1",
    "ER": "0",
    "PR": "0",
    "Prognostic": "IIIA"
  },
  {
    "T": "1*",
    "N": "2",
    "M": "0",
    "Grade": "3",
    "HER2": "0",
    "ER": "1",
    "PR": "1",
    "Prognostic": "IIIA"
  },
  {
    "T": "1*",
    "N": "2",
    "M": "0",
    "Grade": "3",
    "HER2": "0",
    "ER": "1",
    "PR": "0",
    "Prognostic": "IIIB"
  },
  {
    "T": "1*",
    "N": "2",
    "M": "0",
    "Grade": "3",
    "HER2": "0",
    "ER": "0",
    "PR": "1",
    "Prognostic": "IIIB"
  },
  {
    "T": "1*",
    "N": "2",
    "M": "0",
    "Grade": "3",
    "HER2": "0",
    "ER": "0",
    "PR": "0",
    "Prognostic": "IIIC"
  },
  {
    "T": "2",
    "N": "2",
    "M": "0",
    "Grade": "1",
    "HER2": "1",
    "ER": "1",
    "PR": "1",
    "Prognostic": "IIA"
  },
  {
    "T": "2",
    "N": "2",
    "M": "0",
    "Grade": "1",
    "HER2": "1",
    "ER": "1",
    "PR": "0",
    "Prognostic": "IIIA"
  },
  {
    "T": "2",
    "N": "2",
    "M": "0",
    "Grade": "1",
    "HER2": "1",
    "ER": "0",
    "PR": "1",
    "Prognostic": "IIIA"
  },
  {
    "T": "2",
    "N": "2",
    "M": "0",
    "Grade": "1",
    "HER2": "1",
    "ER": "0",
    "PR": "0",
    "Prognostic": "IIIA"
  },
  {
    "T": "2",
    "N": "2",
    "M": "0",
    "Grade": "1",
    "HER2": "0",
    "ER": "1",
    "PR": "1",
    "Prognostic": "IIA"
  },
  {
    "T": "2",
    "N": "2",
    "M": "0",
    "Grade": "1",
    "HER2": "0",
    "ER": "1",
    "PR": "0",
    "Prognostic": "IIIA"
  },
  {
    "T": "2",
    "N": "2",
    "M": "0",
    "Grade": "1",
    "HER2": "0",
    "ER": "0",
    "PR": "1",
    "Prognostic": "IIIA"
  },
  {
    "T": "2",
    "N": "2",
    "M": "0",
    "Grade": "1",
    "HER2": "0",
    "ER": "0",
    "PR": "0",
    "Prognostic": "IIIB"
  },
  {
    "T": "2",
    "N": "2",
    "M": "0",
    "Grade": "2",
    "HER2": "1",
    "ER": "1",
    "PR": "1",
    "Prognostic": "IIA"
  },
  {
    "T": "2",
    "N": "2",
    "M": "0",
    "Grade": "2",
    "HER2": "1",
    "ER": "1",
    "PR": "0",
    "Prognostic": "IIIA"
  },
  {
    "T": "2",
    "N": "2",
    "M": "0",
    "Grade": "2",
    "HER2": "1",
    "ER": "0",
    "PR": "1",
    "Prognostic": "IIIA"
  },
  {
    "T": "2",
    "N": "2",
    "M": "0",
    "Grade": "2",
    "HER2": "1",
    "ER": "0",
    "PR": "0",
    "Prognostic": "IIIA"
  },
  {
    "T": "2",
    "N": "2",
    "M": "0",
    "Grade": "2",
    "HER2": "0",
    "ER": "1",
    "PR": "1",
    "Prognostic": "IIA"
  },
  {
    "T": "2",
    "N": "2",
    "M": "0",
    "Grade": "2",
    "HER2": "0",
    "ER": "1",
    "PR": "0",
    "Prognostic": "IIIA"
  },
  {
    "T": "2",
    "N": "2",
    "M": "0",
    "Grade": "2",
    "HER2": "0",
    "ER": "0",
    "PR": "1",
    "Prognostic": "IIIA"
  },
  {
    "T": "2",
    "N": "2",
    "M": "0",
    "Grade": "2",
    "HER2": "0",
    "ER": "0",
    "PR": "0",
    "Prognostic": "IIIB"
  },
  {
    "T": "2",
    "N": "2",
    "M": "0",
    "Grade": "3",
    "HER2": "1",
    "ER": "1",
    "PR": "1",
    "Prognostic": "IIB"
  },
  {
    "T": "2",
    "N": "2",
    "M": "0",
    "Grade": "3",
    "HER2": "1",
    "ER": "1",
    "PR": "0",
    "Prognostic": "IIIA"
  },
  {
    "T": "2",
    "N": "2",
    "M": "0",
    "Grade": "3",
    "HER2": "1",
    "ER": "0",
    "PR": "1",
    "Prognostic": "IIIA"
  },
  {
    "T": "2",
    "N": "2",
    "M": "0",
    "Grade": "3",
    "HER2": "1",
    "ER": "0",
    "PR": "0",
    "Prognostic": "IIIA"
  },
  {
    "T": "2",
    "N": "2",
    "M": "0",
    "Grade": "3",
    "HER2": "0",
    "ER": "1",
    "PR": "1",
    "Prognostic": "IIIA"
  },
  {
    "T": "2",
    "N": "2",
    "M": "0",
    "Grade": "3",
    "HER2": "0",
    "ER": "1",
    "PR": "0",
    "Prognostic": "IIIB"
  },
  {
    "T": "2",
    "N": "2",
    "M": "0",
    "Grade": "3",
    "HER2": "0",
    "ER": "0",
    "PR": "1",
    "Prognostic": "IIIB"
  },
  {
    "T": "2",
    "N": "2",
    "M": "0",
    "Grade": "3",
    "HER2": "0",
    "ER": "0",
    "PR": "0",
    "Prognostic": "IIIC"
  },
  {
    "T": "3",
    "N": "1***",
    "M": "0",
    "Grade": "1",
    "HER2": "1",
    "ER": "1",
    "PR": "1",
    "Prognostic": "IIA"
  },
  {
    "T": "3",
    "N": "1***",
    "M": "0",
    "Grade": "1",
    "HER2": "1",
    "ER": "1",
    "PR": "0",
    "Prognostic": "IIIA"
  },
  {
    "T": "3",
    "N": "1***",
    "M": "0",
    "Grade": "1",
    "HER2": "1",
    "ER": "0",
    "PR": "1",
    "Prognostic": "IIIA"
  },
  {
    "T": "3",
    "N": "1***",
    "M": "0",
    "Grade": "1",
    "HER2": "1",
    "ER": "0",
    "PR": "0",
    "Prognostic": "IIIA"
  },
  {
    "T": "3",
    "N": "1***",
    "M": "0",
    "Grade": "1",
    "HER2": "0",
    "ER": "1",
    "PR": "1",
    "Prognostic": "IIA"
  },
  {
    "T": "3",
    "N": "1***",
    "M": "0",
    "Grade": "1",
    "HER2": "0",
    "ER": "1",
    "PR": "0",
    "Prognostic": "IIIA"
  },
  {
    "T": "3",
    "N": "1***",
    "M": "0",
    "Grade": "1",
    "HER2": "0",
    "ER": "0",
    "PR": "1",
    "Prognostic": "IIIA"
  },
  {
    "T": "3",
    "N": "1***",
    "M": "0",
    "Grade": "1",
    "HER2": "0",
    "ER": "0",
    "PR": "0",
    "Prognostic": "IIIB"
  },
  {
    "T": "3",
    "N": "1***",
    "M": "0",
    "Grade": "2",
    "HER2": "1",
    "ER": "1",
    "PR": "1",
    "Prognostic": "IIA"
  },
  {
    "T": "3",
    "N": "1***",
    "M": "0",
    "Grade": "2",
    "HER2": "1",
    "ER": "1",
    "PR": "0",
    "Prognostic": "IIIA"
  },
  {
    "T": "3",
    "N": "1***",
    "M": "0",
    "Grade": "2",
    "HER2": "1",
    "ER": "0",
    "PR": "1",
    "Prognostic": "IIIA"
  },
  {
    "T": "3",
    "N": "1***",
    "M": "0",
    "Grade": "2",
    "HER2": "1",
    "ER": "0",
    "PR": "0",
    "Prognostic": "IIIA"
  },
  {
    "T": "3",
    "N": "1***",
    "M": "0",
    "Grade": "2",
    "HER2": "0",
    "ER": "1",
    "PR": "1",
    "Prognostic": "IIA"
  },
  {
    "T": "3",
    "N": "1***",
    "M": "0",
    "Grade": "2",
    "HER2": "0",
    "ER": "1",
    "PR": "0",
    "Prognostic": "IIIA"
  },
  {
    "T": "3",
    "N": "1***",
    "M": "0",
    "Grade": "2",
    "HER2": "0",
    "ER": "0",
    "PR": "1",
    "Prognostic": "IIIA"
  },
  {
    "T": "3",
    "N": "1***",
    "M": "0",
    "Grade": "2",
    "HER2": "0",
    "ER": "0",
    "PR": "0",
    "Prognostic": "IIIB"
  },
  {
    "T": "3",
    "N": "1***",
    "M": "0",
    "Grade": "3",
    "HER2": "1",
    "ER": "1",
    "PR": "1",
    "Prognostic": "IIB"
  },
  {
    "T": "3",
    "N": "1***",
    "M": "0",
    "Grade": "3",
    "HER2": "1",
    "ER": "1",
    "PR": "0",
    "Prognostic": "IIIA"
  },
  {
    "T": "3",
    "N": "1***",
    "M": "0",
    "Grade": "3",
    "HER2": "1",
    "ER": "0",
    "PR": "1",
    "Prognostic": "IIIA"
  },
  {
    "T": "3",
    "N": "1***",
    "M": "0",
    "Grade": "3",
    "HER2": "1",
    "ER": "0",
    "PR": "0",
    "Prognostic": "IIIA"
  },
  {
    "T": "3",
    "N": "1***",
    "M": "0",
    "Grade": "3",
    "HER2": "0",
    "ER": "1",
    "PR": "1",
    "Prognostic": "IIIA"
  },
  {
    "T": "3",
    "N": "1***",
    "M": "0",
    "Grade": "3",
    "HER2": "0",
    "ER": "1",
    "PR": "0",
    "Prognostic": "IIIB"
  },
  {
    "T": "3",
    "N": "1***",
    "M": "0",
    "Grade": "3",
    "HER2": "0",
    "ER": "0",
    "PR": "1",
    "Prognostic": "IIIB"
  },
  {
    "T": "3",
    "N": "1***",
    "M": "0",
    "Grade": "3",
    "HER2": "0",
    "ER": "0",
    "PR": "0",
    "Prognostic": "IIIC"
  },
  {
    "T": "3",
    "N": "2",
    "M": "0",
    "Grade": "1",
    "HER2": "1",
    "ER": "1",
    "PR": "1",
    "Prognostic": "IIA"
  },
  {
    "T": "3",
    "N": "2",
    "M": "0",
    "Grade": "1",
    "HER2": "1",
    "ER": "1",
    "PR": "0",
    "Prognostic": "IIIA"
  },
  {
    "T": "3",
    "N": "2",
    "M": "0",
    "Grade": "1",
    "HER2": "1",
    "ER": "0",
    "PR": "1",
    "Prognostic": "IIIA"
  },
  {
    "T": "3",
    "N": "2",
    "M": "0",
    "Grade": "1",
    "HER2": "1",
    "ER": "0",
    "PR": "0",
    "Prognostic": "IIIA"
  },
  {
    "T": "3",
    "N": "2",
    "M": "0",
    "Grade": "1",
    "HER2": "0",
    "ER": "1",
    "PR": "1",
    "Prognostic": "IIA"
  },
  {
    "T": "3",
    "N": "2",
    "M": "0",
    "Grade": "1",
    "HER2": "0",
    "ER": "1",
    "PR": "0",
    "Prognostic": "IIIA"
  },
  {
    "T": "3",
    "N": "2",
    "M": "0",
    "Grade": "1",
    "HER2": "0",
    "ER": "0",
    "PR": "1",
    "Prognostic": "IIIA"
  },
  {
    "T": "3",
    "N": "2",
    "M": "0",
    "Grade": "1",
    "HER2": "0",
    "ER": "0",
    "PR": "0",
    "Prognostic": "IIIB"
  },
  {
    "T": "3",
    "N": "2",
    "M": "0",
    "Grade": "2",
    "HER2": "1",
    "ER": "1",
    "PR": "1",
    "Prognostic": "IIA"
  },
  {
    "T": "3",
    "N": "2",
    "M": "0",
    "Grade": "2",
    "HER2": "1",
    "ER": "1",
    "PR": "0",
    "Prognostic": "IIIA"
  },
  {
    "T": "3",
    "N": "2",
    "M": "0",
    "Grade": "2",
    "HER2": "1",
    "ER": "0",
    "PR": "1",
    "Prognostic": "IIIA"
  },
  {
    "T": "3",
    "N": "2",
    "M": "0",
    "Grade": "2",
    "HER2": "1",
    "ER": "0",
    "PR": "0",
    "Prognostic": "IIIA"
  },
  {
    "T": "3",
    "N": "2",
    "M": "0",
    "Grade": "2",
    "HER2": "0",
    "ER": "1",
    "PR": "1",
    "Prognostic": "IIA"
  },
  {
    "T": "3",
    "N": "2",
    "M": "0",
    "Grade": "2",
    "HER2": "0",
    "ER": "1",
    "PR": "0",
    "Prognostic": "IIIA"
  },
  {
    "T": "3",
    "N": "2",
    "M": "0",
    "Grade": "2",
    "HER2": "0",
    "ER": "0",
    "PR": "1",
    "Prognostic": "IIIA"
  },
  {
    "T": "3",
    "N": "2",
    "M": "0",
    "Grade": "2",
    "HER2": "0",
    "ER": "0",
    "PR": "0",
    "Prognostic": "IIIB"
  },
  {
    "T": "3",
    "N": "2",
    "M": "0",
    "Grade": "3",
    "HER2": "1",
    "ER": "1",
    "PR": "1",
    "Prognostic": "IIB"
  },
  {
    "T": "3",
    "N": "2",
    "M": "0",
    "Grade": "3",
    "HER2": "1",
    "ER": "1",
    "PR": "0",
    "Prognostic": "IIIA"
  },
  {
    "T": "3",
    "N": "2",
    "M": "0",
    "Grade": "3",
    "HER2": "1",
    "ER": "0",
    "PR": "1",
    "Prognostic": "IIIA"
  },
  {
    "T": "3",
    "N": "2",
    "M": "0",
    "Grade": "3",
    "HER2": "1",
    "ER": "0",
    "PR": "0",
    "Prognostic": "IIIA"
  },
  {
    "T": "3",
    "N": "2",
    "M": "0",
    "Grade": "3",
    "HER2": "0",
    "ER": "1",
    "PR": "1",
    "Prognostic": "IIIA"
  },
  {
    "T": "3",
    "N": "2",
    "M": "0",
    "Grade": "3",
    "HER2": "0",
    "ER": "1",
    "PR": "0",
    "Prognostic": "IIIB"
  },
  {
    "T": "3",
    "N": "2",
    "M": "0",
    "Grade": "3",
    "HER2": "0",
    "ER": "0",
    "PR": "1",
    "Prognostic": "IIIB"
  },
  {
    "T": "3",
    "N": "2",
    "M": "0",
    "Grade": "3",
    "HER2": "0",
    "ER": "0",
    "PR": "0",
    "Prognostic": "IIIC"
  },
  {
    "T": "4",
    "N": "0",
    "M": "0",
    "Grade": "1",
    "HER2": "1",
    "ER": "1",
    "PR": "1",
    "Prognostic": "IIIA"
  },
  {
    "T": "4",
    "N": "0",
    "M": "0",
    "Grade": "1",
    "HER2": "1",
    "ER": "1",
    "PR": "0",
    "Prognostic": "IIIB"
  },
  {
    "T": "4",
    "N": "0",
    "M": "0",
    "Grade": "1",
    "HER2": "1",
    "ER": "0",
    "PR": "1",
    "Prognostic": "IIIB"
  },
  {
    "T": "4",
    "N": "0",
    "M": "0",
    "Grade": "1",
    "HER2": "1",
    "ER": "0",
    "PR": "0",
    "Prognostic": "IIIB"
  },
  {
    "T": "4",
    "N": "0",
    "M": "0",
    "Grade": "1",
    "HER2": "0",
    "ER": "1",
    "PR": "1",
    "Prognostic": "IIIB"
  },
  {
    "T": "4",
    "N": "0",
    "M": "0",
    "Grade": "1",
    "HER2": "0",
    "ER": "1",
    "PR": "0",
    "Prognostic": "IIIB"
  },
  {
    "T": "4",
    "N": "0",
    "M": "0",
    "Grade": "1",
    "HER2": "0",
    "ER": "0",
    "PR": "1",
    "Prognostic": "IIIB"
  },
  {
    "T": "4",
    "N": "0",
    "M": "0",
    "Grade": "1",
    "HER2": "0",
    "ER": "0",
    "PR": "0",
    "Prognostic": "IIIC"
  },
  {
    "T": "4",
    "N": "0",
    "M": "0",
    "Grade": "2",
    "HER2": "1",
    "ER": "1",
    "PR": "1",
    "Prognostic": "IIIA"
  },
  {
    "T": "4",
    "N": "0",
    "M": "0",
    "Grade": "2",
    "HER2": "1",
    "ER": "1",
    "PR": "0",
    "Prognostic": "IIIB"
  },
  {
    "T": "4",
    "N": "0",
    "M": "0",
    "Grade": "2",
    "HER2": "1",
    "ER": "0",
    "PR": "1",
    "Prognostic": "IIIB"
  },
  {
    "T": "4",
    "N": "0",
    "M": "0",
    "Grade": "2",
    "HER2": "1",
    "ER": "0",
    "PR": "0",
    "Prognostic": "IIIB"
  },
  {
    "T": "4",
    "N": "0",
    "M": "0",
    "Grade": "2",
    "HER2": "0",
    "ER": "1",
    "PR": "1",
    "Prognostic": "IIIB"
  },
  {
    "T": "4",
    "N": "0",
    "M": "0",
    "Grade": "2",
    "HER2": "0",
    "ER": "1",
    "PR": "0",
    "Prognostic": "IIIB"
  },
  {
    "T": "4",
    "N": "0",
    "M": "0",
    "Grade": "2",
    "HER2": "0",
    "ER": "0",
    "PR": "1",
    "Prognostic": "IIIB"
  },
  {
    "T": "4",
    "N": "0",
    "M": "0",
    "Grade": "2",
    "HER2": "0",
    "ER": "0",
    "PR": "0",
    "Prognostic": "IIIC"
  },
  {
    "T": "4",
    "N": "0",
    "M": "0",
    "Grade": "3",
    "HER2": "1",
    "ER": "1",
    "PR": "1",
    "Prognostic": "IIIB"
  },
  {
    "T": "4",
    "N": "0",
    "M": "0",
    "Grade": "3",
    "HER2": "1",
    "ER": "1",
    "PR": "0",
    "Prognostic": "IIIB"
  },
  {
    "T": "4",
    "N": "0",
    "M": "0",
    "Grade": "3",
    "HER2": "1",
    "ER": "0",
    "PR": "1",
    "Prognostic": "IIIB"
  },
  {
    "T": "4",
    "N": "0",
    "M": "0",
    "Grade": "3",
    "HER2": "1",
    "ER": "0",
    "PR": "0",
    "Prognostic": "IIIB"
  },
  {
    "T": "4",
    "N": "0",
    "M": "0",
    "Grade": "3",
    "HER2": "0",
    "ER": "1",
    "PR": "1",
    "Prognostic": "IIIB"
  },
  {
    "T": "4",
    "N": "0",
    "M": "0",
    "Grade": "3",
    "HER2": "0",
    "ER": "1",
    "PR": "0",
    "Prognostic": "IIIC"
  },
  {
    "T": "4",
    "N": "0",
    "M": "0",
    "Grade": "3",
    "HER2": "0",
    "ER": "0",
    "PR": "1",
    "Prognostic": "IIIC"
  },
  {
    "T": "4",
    "N": "0",
    "M": "0",
    "Grade": "3",
    "HER2": "0",
    "ER": "0",
    "PR": "0",
    "Prognostic": "IIIC"
  },
  {
    "T": "4",
    "N": "1***",
    "M": "0",
    "Grade": "1",
    "HER2": "1",
    "ER": "1",
    "PR": "1",
    "Prognostic": "IIIA"
  },
  {
    "T": "4",
    "N": "1***",
    "M": "0",
    "Grade": "1",
    "HER2": "1",
    "ER": "1",
    "PR": "0",
    "Prognostic": "IIIB"
  },
  {
    "T": "4",
    "N": "1***",
    "M": "0",
    "Grade": "1",
    "HER2": "1",
    "ER": "0",
    "PR": "1",
    "Prognostic": "IIIB"
  },
  {
    "T": "4",
    "N": "1***",
    "M": "0",
    "Grade": "1",
    "HER2": "1",
    "ER": "0",
    "PR": "0",
    "Prognostic": "IIIB"
  },
  {
    "T": "4",
    "N": "1***",
    "M": "0",
    "Grade": "1",
    "HER2": "0",
    "ER": "1",
    "PR": "1",
    "Prognostic": "IIIB"
  },
  {
    "T": "4",
    "N": "1***",
    "M": "0",
    "Grade": "1",
    "HER2": "0",
    "ER": "1",
    "PR": "0",
    "Prognostic": "IIIB"
  },
  {
    "T": "4",
    "N": "1***",
    "M": "0",
    "Grade": "1",
    "HER2": "0",
    "ER": "0",
    "PR": "1",
    "Prognostic": "IIIB"
  },
  {
    "T": "4",
    "N": "1***",
    "M": "0",
    "Grade": "1",
    "HER2": "0",
    "ER": "0",
    "PR": "0",
    "Prognostic": "IIIC"
  },
  {
    "T": "4",
    "N": "1***",
    "M": "0",
    "Grade": "2",
    "HER2": "1",
    "ER": "1",
    "PR": "1",
    "Prognostic": "IIIA"
  },
  {
    "T": "4",
    "N": "1***",
    "M": "0",
    "Grade": "2",
    "HER2": "1",
    "ER": "1",
    "PR": "0",
    "Prognostic": "IIIB"
  },
  {
    "T": "4",
    "N": "1***",
    "M": "0",
    "Grade": "2",
    "HER2": "1",
    "ER": "0",
    "PR": "1",
    "Prognostic": "IIIB"
  },
  {
    "T": "4",
    "N": "1***",
    "M": "0",
    "Grade": "2",
    "HER2": "1",
    "ER": "0",
    "PR": "0",
    "Prognostic": "IIIB"
  },
  {
    "T": "4",
    "N": "1***",
    "M": "0",
    "Grade": "2",
    "HER2": "0",
    "ER": "1",
    "PR": "1",
    "Prognostic": "IIIB"
  },
  {
    "T": "4",
    "N": "1***",
    "M": "0",
    "Grade": "2",
    "HER2": "0",
    "ER": "1",
    "PR": "0",
    "Prognostic": "IIIB"
  },
  {
    "T": "4",
    "N": "1***",
    "M": "0",
    "Grade": "2",
    "HER2": "0",
    "ER": "0",
    "PR": "1",
    "Prognostic": "IIIB"
  },
  {
    "T": "4",
    "N": "1***",
    "M": "0",
    "Grade": "2",
    "HER2": "0",
    "ER": "0",
    "PR": "0",
    "Prognostic": "IIIC"
  },
  {
    "T": "4",
    "N": "1***",
    "M": "0",
    "Grade": "3",
    "HER2": "1",
    "ER": "1",
    "PR": "1",
    "Prognostic": "IIIB"
  },
  {
    "T": "4",
    "N": "1***",
    "M": "0",
    "Grade": "3",
    "HER2": "1",
    "ER": "1",
    "PR": "0",
    "Prognostic": "IIIB"
  },
  {
    "T": "4",
    "N": "1***",
    "M": "0",
    "Grade": "3",
    "HER2": "1",
    "ER": "0",
    "PR": "1",
    "Prognostic": "IIIB"
  },
  {
    "T": "4",
    "N": "1***",
    "M": "0",
    "Grade": "3",
    "HER2": "1",
    "ER": "0",
    "PR": "0",
    "Prognostic": "IIIB"
  },
  {
    "T": "4",
    "N": "1***",
    "M": "0",
    "Grade": "3",
    "HER2": "0",
    "ER": "1",
    "PR": "1",
    "Prognostic": "IIIB"
  },
  {
    "T": "4",
    "N": "1***",
    "M": "0",
    "Grade": "3",
    "HER2": "0",
    "ER": "1",
    "PR": "0",
    "Prognostic": "IIIC"
  },
  {
    "T": "4",
    "N": "1***",
    "M": "0",
    "Grade": "3",
    "HER2": "0",
    "ER": "0",
    "PR": "1",
    "Prognostic": "IIIC"
  },
  {
    "T": "4",
    "N": "1***",
    "M": "0",
    "Grade": "3",
    "HER2": "0",
    "ER": "0",
    "PR": "0",
    "Prognostic": "IIIC"
  },
  {
    "T": "4",
    "N": "2",
    "M": "0",
    "Grade": "1",
    "HER2": "1",
    "ER": "1",
    "PR": "1",
    "Prognostic": "IIIA"
  },
  {
    "T": "4",
    "N": "2",
    "M": "0",
    "Grade": "1",
    "HER2": "1",
    "ER": "1",
    "PR": "0",
    "Prognostic": "IIIB"
  },
  {
    "T": "4",
    "N": "2",
    "M": "0",
    "Grade": "1",
    "HER2": "1",
    "ER": "0",
    "PR": "1",
    "Prognostic": "IIIB"
  },
  {
    "T": "4",
    "N": "2",
    "M": "0",
    "Grade": "1",
    "HER2": "1",
    "ER": "0",
    "PR": "0",
    "Prognostic": "IIIB"
  },
  {
    "T": "4",
    "N": "2",
    "M": "0",
    "Grade": "1",
    "HER2": "0",
    "ER": "1",
    "PR": "1",
    "Prognostic": "IIIB"
  },
  {
    "T": "4",
    "N": "2",
    "M": "0",
    "Grade": "1",
    "HER2": "0",
    "ER": "1",
    "PR": "0",
    "Prognostic": "IIIB"
  },
  {
    "T": "4",
    "N": "2",
    "M": "0",
    "Grade": "1",
    "HER2": "0",
    "ER": "0",
    "PR": "1",
    "Prognostic": "IIIB"
  },
  {
    "T": "4",
    "N": "2",
    "M": "0",
    "Grade": "1",
    "HER2": "0",
    "ER": "0",
    "PR": "0",
    "Prognostic": "IIIC"
  },
  {
    "T": "4",
    "N": "2",
    "M": "0",
    "Grade": "2",
    "HER2": "1",
    "ER": "1",
    "PR": "1",
    "Prognostic": "IIIA"
  },
  {
    "T": "4",
    "N": "2",
    "M": "0",
    "Grade": "2",
    "HER2": "1",
    "ER": "1",
    "PR": "0",
    "Prognostic": "IIIB"
  },
  {
    "T": "4",
    "N": "2",
    "M": "0",
    "Grade": "2",
    "HER2": "1",
    "ER": "0",
    "PR": "1",
    "Prognostic": "IIIB"
  },
  {
    "T": "4",
    "N": "2",
    "M": "0",
    "Grade": "2",
    "HER2": "1",
    "ER": "0",
    "PR": "0",
    "Prognostic": "IIIB"
  },
  {
    "T": "4",
    "N": "2",
    "M": "0",
    "Grade": "2",
    "HER2": "0",
    "ER": "1",
    "PR": "1",
    "Prognostic": "IIIB"
  },
  {
    "T": "4",
    "N": "2",
    "M": "0",
    "Grade": "2",
    "HER2": "0",
    "ER": "1",
    "PR": "0",
    "Prognostic": "IIIB"
  },
  {
    "T": "4",
    "N": "2",
    "M": "0",
    "Grade": "2",
    "HER2": "0",
    "ER": "0",
    "PR": "1",
    "Prognostic": "IIIB"
  },
  {
    "T": "4",
    "N": "2",
    "M": "0",
    "Grade": "2",
    "HER2": "0",
    "ER": "0",
    "PR": "0",
    "Prognostic": "IIIC"
  },
  {
    "T": "4",
    "N": "2",
    "M": "0",
    "Grade": "3",
    "HER2": "1",
    "ER": "1",
    "PR": "1",
    "Prognostic": "IIIB"
  },
  {
    "T": "4",
    "N": "2",
    "M": "0",
    "Grade": "3",
    "HER2": "1",
    "ER": "1",
    "PR": "0",
    "Prognostic": "IIIB"
  },
  {
    "T": "4",
    "N": "2",
    "M": "0",
    "Grade": "3",
    "HER2": "1",
    "ER": "0",
    "PR": "1",
    "Prognostic": "IIIB"
  },
  {
    "T": "4",
    "N": "2",
    "M": "0",
    "Grade": "3",
    "HER2": "1",
    "ER": "0",
    "PR": "0",
    "Prognostic": "IIIB"
  },
  {
    "T": "4",
    "N": "2",
    "M": "0",
    "Grade": "3",
    "HER2": "0",
    "ER": "1",
    "PR": "1",
    "Prognostic": "IIIB"
  },
  {
    "T": "4",
    "N": "2",
    "M": "0",
    "Grade": "3",
    "HER2": "0",
    "ER": "1",
    "PR": "0",
    "Prognostic": "IIIC"
  },
  {
    "T": "4",
    "N": "2",
    "M": "0",
    "Grade": "3",
    "HER2": "0",
    "ER": "0",
    "PR": "1",
    "Prognostic": "IIIC"
  },
  {
    "T": "4",
    "N": "2",
    "M": "0",
    "Grade": "3",
    "HER2": "0",
    "ER": "0",
    "PR": "0",
    "Prognostic": "IIIC"
  },
  {
    "T": "Any",
    "N": "3",
    "M": "0",
    "Grade": "1",
    "HER2": "1",
    "ER": "1",
    "PR": "1",
    "Prognostic": "IIIA"
  },
  {
    "T": "Any",
    "N": "3",
    "M": "0",
    "Grade": "1",
    "HER2": "1",
    "ER": "1",
    "PR": "0",
    "Prognostic": "IIIB"
  },
  {
    "T": "Any",
    "N": "3",
    "M": "0",
    "Grade": "1",
    "HER2": "1",
    "ER": "0",
    "PR": "1",
    "Prognostic": "IIIB"
  },
  {
    "T": "Any",
    "N": "3",
    "M": "0",
    "Grade": "1",
    "HER2": "1",
    "ER": "0",
    "PR": "0",
    "Prognostic": "IIIB"
  },
  {
    "T": "Any",
    "N": "3",
    "M": "0",
    "Grade": "1",
    "HER2": "0",
    "ER": "1",
    "PR": "1",
    "Prognostic": "IIIB"
  },
  {
    "T": "Any",
    "N": "3",
    "M": "0",
    "Grade": "1",
    "HER2": "0",
    "ER": "1",
    "PR": "0",
    "Prognostic": "IIIB"
  },
  {
    "T": "Any",
    "N": "3",
    "M": "0",
    "Grade": "1",
    "HER2": "0",
    "ER": "0",
    "PR": "1",
    "Prognostic": "IIIB"
  },
  {
    "T": "Any",
    "N": "3",
    "M": "0",
    "Grade": "1",
    "HER2": "0",
    "ER": "0",
    "PR": "0",
    "Prognostic": "IIIC"
  },
  {
    "T": "Any",
    "N": "3",
    "M": "0",
    "Grade": "2",
    "HER2": "1",
    "ER": "1",
    "PR": "1",
    "Prognostic": "IIIA"
  },
  {
    "T": "Any",
    "N": "3",
    "M": "0",
    "Grade": "2",
    "HER2": "1",
    "ER": "1",
    "PR": "0",
    "Prognostic": "IIIB"
  },
  {
    "T": "Any",
    "N": "3",
    "M": "0",
    "Grade": "2",
    "HER2": "1",
    "ER": "0",
    "PR": "1",
    "Prognostic": "IIIB"
  },
  {
    "T": "Any",
    "N": "3",
    "M": "0",
    "Grade": "2",
    "HER2": "1",
    "ER": "0",
    "PR": "0",
    "Prognostic": "IIIB"
  },
  {
    "T": "Any",
    "N": "3",
    "M": "0",
    "Grade": "2",
    "HER2": "0",
    "ER": "1",
    "PR": "1",
    "Prognostic": "IIIB"
  },
  {
    "T": "Any",
    "N": "3",
    "M": "0",
    "Grade": "2",
    "HER2": "0",
    "ER": "1",
    "PR": "0",
    "Prognostic": "IIIB"
  },
  {
    "T": "Any",
    "N": "3",
    "M": "0",
    "Grade": "2",
    "HER2": "0",
    "ER": "0",
    "PR": "1",
    "Prognostic": "IIIB"
  },
  {
    "T": "Any",
    "N": "3",
    "M": "0",
    "Grade": "2",
    "HER2": "0",
    "ER": "0",
    "PR": "0",
    "Prognostic": "IIIC"
  },
  {
    "T": "Any",
    "N": "3",
    "M": "0",
    "Grade": "3",
    "HER2": "1",
    "ER": "1",
    "PR": "1",
    "Prognostic": "IIIB"
  },
  {
    "T": "Any",
    "N": "3",
    "M": "0",
    "Grade": "3",
    "HER2": "1",
    "ER": "1",
    "PR": "0",
    "Prognostic": "IIIB"
  },
  {
    "T": "Any",
    "N": "3",
    "M": "0",
    "Grade": "3",
    "HER2": "1",
    "ER": "0",
    "PR": "1",
    "Prognostic": "IIIB"
  },
  {
    "T": "Any",
    "N": "3",
    "M": "0",
    "Grade": "3",
    "HER2": "1",
    "ER": "0",
    "PR": "0",
    "Prognostic": "IIIB"
  },
  {
    "T": "Any",
    "N": "3",
    "M": "0",
    "Grade": "3",
    "HER2": "0",
    "ER": "1",
    "PR": "1",
    "Prognostic": "IIIB"
  },
  {
    "T": "Any",
    "N": "3",
    "M": "0",
    "Grade": "3",
    "HER2": "0",
    "ER": "1",
    "PR": "0",
    "Prognostic": "IIIC"
  },
  {
    "T": "Any",
    "N": "3",
    "M": "0",
    "Grade": "3",
    "HER2": "0",
    "ER": "0",
    "PR": "1",
    "Prognostic": "IIIC"
  },
  {
    "T": "Any",
    "N": "3",
    "M": "0",
    "Grade": "3",
    "HER2": "0",
    "ER": "0",
    "PR": "0",
    "Prognostic": "IIIC"
  },
  {
    "T": "Any",
    "N": "Any",
    "M": "1",
    "Grade": "Any",
    "HER2": "Any",
    "ER": "Any",
    "PR": "Any",
    "Prognostic": "IV"
  }
];
const ANATOMIC_RULES = [
  {
    "T": "is",
    "N": "0",
    "M": "0",
    "Stage": "0"
  },
  {
    "T": "1",
    "N": "0",
    "M": "0",
    "Stage": "IA"
  },
  {
    "T": "0",
    "N": "1mi",
    "M": "0",
    "Stage": "IB"
  },
  {
    "T": "1",
    "N": "1mi",
    "M": "0",
    "Stage": "IB"
  },
  {
    "T": "0",
    "N": "1",
    "M": "0",
    "Stage": "IIA"
  },
  {
    "T": "1",
    "N": "1",
    "M": "0",
    "Stage": "IIA"
  },
  {
    "T": "2",
    "N": "0",
    "M": "0",
    "Stage": "IIA"
  },
  {
    "T": "2",
    "N": "1",
    "M": "0",
    "Stage": "IIB"
  },
  {
    "T": "3",
    "N": "0",
    "M": "0",
    "Stage": "IIB"
  },
  {
    "T": "0",
    "N": "2",
    "M": "0",
    "Stage": "IIIA"
  },
  {
    "T": "1",
    "N": "2",
    "M": "0",
    "Stage": "IIIA"
  },
  {
    "T": "2",
    "N": "2",
    "M": "0",
    "Stage": "IIIA"
  },
  {
    "T": "3",
    "N": "1",
    "M": "0",
    "Stage": "IIIA"
  },
  {
    "T": "3",
    "N": "2",
    "M": "0",
    "Stage": "IIIA"
  },
  {
    "T": "4",
    "N": "0",
    "M": "0",
    "Stage": "IIIB"
  },
  {
    "T": "4",
    "N": "1",
    "M": "0",
    "Stage": "IIIB"
  },
  {
    "T": "4",
    "N": "2",
    "M": "0",
    "Stage": "IIIB"
  },
  {
    "T": "Any",
    "N": "3",
    "M": "0",
    "Stage": "IIIC"
  },
  {
    "T": "Any",
    "N": "Any",
    "M": "1",
    "Stage": "IV"
  },
  {
    "T": "2",
    "N": "1mi",
    "M": "0",
    "Stage": "IIB"
  },
  {
    "T": "3",
    "N": "1mi",
    "M": "0",
    "Stage": "IIIA"
  },
  {
    "T": "4",
    "N": "1mi",
    "M": "0",
    "Stage": "IIIB"
  }
];

const state = {
  T: null,
  N: null,
  M: null,
  Grade: null,
  HER2: null,
  ER: null,
  PR: null,
  Oncotype: null
};

const OPTIONS = [
  {
    key: "T",
    label: "T Stage",
    options: [
      { label: "Tis", value: "is", anatomic: "is" },
      { label: "T0", value: "0", anatomic: "0" },
      { label: "T1mi", value: "1*", anatomic: "1" },
      { label: "T1", value: "1*", anatomic: "1" },
      { label: "T2", value: "2", anatomic: "2" },
      { label: "T3", value: "3", anatomic: "3" },
      { label: "T4", value: "4", anatomic: "4" }
    ]
  },
  {
    key: "N",
    label: "N Stage",
    options: [
      { label: "N0", value: ["0"], anatomic: "0" },
      { label: "N1mi", value: ["1mi", "1***"], anatomic: "1mi" },
      { label: "N1", value: ["1**", "1***"], anatomic: "1" },
      { label: "N2", value: ["2"], anatomic: "2" },
      { label: "N3", value: ["3"], anatomic: "3" }
    ]
  },
  {
    key: "M",
    label: "M Stage",
    options: [
      { label: "M0", value: "0", anatomic: "0" },
      { label: "M1", value: "1", anatomic: "1" }
    ]
  },
  {
    key: "Grade",
    label: "Tumor Grade",
    options: [
      { label: "Grade 1", value: "1" },
      { label: "Grade 2", value: "2" },
      { label: "Grade 3", value: "3" }
    ]
  },
  {
    key: "HER2",
    label: "HER2 Status",
    options: [
      { label: "Positive", value: "1" },
      { label: "Negative", value: "0" }
    ]
  },
  {
    key: "ER",
    label: "ER Status",
    options: [
      { label: "Positive", value: "1" },
      { label: "Negative", value: "0" }
    ]
  },
  {
    key: "PR",
    label: "PR Status",
    options: [
      { label: "Positive", value: "1" },
      { label: "Negative", value: "0" }
    ]
  },
  {
    key: "Oncotype",
    label: "Oncotype Dx Score",
    pathologicalOnly: true,
    options: [
      { label: "< 11", value: "<11" },
      { label: "≥ 11", value: ">=11" }
    ]
  }
];

function ruleMatches(ruleValue, selectedValue) {
  if (ruleValue === "Any") return true;
  if (Array.isArray(selectedValue)) return selectedValue.includes(ruleValue);
  return ruleValue === selectedValue;
}

function calculateAnatomic() {
  if (!state.T || !state.N || !state.M) return null;

  const t = state.T.anatomic;
  const n = state.N.anatomic;
  const m = state.M.anatomic;

  const match = ANATOMIC_RULES.find(rule =>
    (rule.T === t || rule.T === "Any") &&
    (rule.N === n || rule.N === "Any") &&
    (rule.M === m || rule.M === "Any")
  );

  return match ? match.Stage : null;
}

function calculateOncotypeOverride() {
  if (stagingMode !== "pathologic") return null;
  if (!state.Oncotype || state.Oncotype.value !== "<11") return null;

  if (!state.T || !state.N || !state.M || !state.HER2 || !state.PR) {
    return null;
  }

  const isT1N0M0 =
    state.T.value === "1*" &&
    Array.isArray(state.N.value) &&
    state.N.value.includes("0") &&
    state.M.value === "0";

  const isT2N0M0 =
    state.T.value === "2" &&
    Array.isArray(state.N.value) &&
    state.N.value.includes("0") &&
    state.M.value === "0";

  const isHER2Negative = state.HER2.value === "0";
  const isERPositive = state.ER.value === "1";

  if ((isT1N0M0 || isT2N0M0) && isHER2Negative && isERPositive) {
    return "IA"; // change this if your Oncotype <11 rule maps to a different stage
  }

  return null;
}

function calculatePrognostic() {
  if (!state.T || !state.N || !state.M || !state.Grade || !state.HER2 || !state.ER || !state.PR) return null;

  const oncotypeOverride = calculateOncotypeOverride();

if (oncotypeOverride) {
  return {
    Prognostic: oncotypeOverride
  };
}

const activeRules =
  stagingMode === "clinical"
    ? CLINICAL_RULES
    : PATHOLOGIC_RULES;

const match = activeRules.find(rule =>
    ruleMatches(rule.T, state.T.value) &&
    ruleMatches(rule.N, state.N.value) &&
    ruleMatches(rule.M, state.M.value) &&
    ruleMatches(rule.Grade, state.Grade.value) &&
    ruleMatches(rule.HER2, state.HER2.value) &&
    ruleMatches(rule.ER, state.ER.value) &&
    ruleMatches(rule.PR, state.PR.value)
  );

  return match || null;
}

function updateResults() {
  document.getElementById("prognosticTitle").textContent =
  stagingMode === "clinical"
    ? "Clinical Prognostic Stage"
    : "Pathological Prognostic Stage";
  const anatomic = calculateAnatomic();
  const prognosticMatch = calculatePrognostic();

  document.getElementById("anatomicResult").textContent = anatomic || "N/A";
  document.getElementById("prognosticResult").textContent = prognosticMatch ? prognosticMatch.Prognostic : "N/A";

  const missingTNM = ["T", "N", "M"].filter(key => !state[key]);
  const missingProg = ["Grade", "HER2", "ER", "PR"].filter(key => !state[key]);

  const helper = document.getElementById("helperText");
  if (missingTNM.length > 0) {
    helper.innerHTML = "Select T, N, and M to calculate anatomic stage.<br>Additionally, select Grade, HER2, ER, and PR to also calculate prognostic stage.";
  } else if (missingProg.length > 0) {
    helper.textContent = "Select Grade, HER2, ER, and PR to calculate prognostic stage.";
  } else {
    helper.textContent = "Both stages calculated. Verify results against official AJCC resources before clinical use.";
  }

  const debug = {
    selected: {
      T: state.T,
      N: state.N,
      M: state.M,
      Grade: state.Grade,
      HER2: state.HER2,
      ER: state.ER,
      PR: state.PR
    },
    anatomicStage: anatomic,
    matchedPrognosticRule: prognosticMatch
  };

  document.getElementById("debugBox").textContent = JSON.stringify(debug, null, 2);
}



function renderControls() {
  const controls = document.getElementById("controls");
  controls.innerHTML = "";

  OPTIONS.forEach(group => {
  if (group.pathologicalOnly && stagingMode !== "pathologic") {
    return;
  }
    const section = document.createElement("section");
    section.className = "section-card";

    const title = document.createElement("h3");
    title.textContent = group.label;
    section.appendChild(title);

    const row = document.createElement("div");
    row.className = "button-row";

    group.options.forEach(option => {
      const button = document.createElement("button");
      button.className = "choice";
      button.type = "button";
      button.textContent = option.label;
      button.dataset.group = group.key;
      button.dataset.label = option.label;
      
      if (state[group.key] && state[group.key].label === option.label) {
        button.classList.add("selected");
      }
      
      button.addEventListener("click", () => {
        state[group.key] = option;
        document.querySelectorAll(`[data-group="${group.key}"]`).forEach(btn => btn.classList.remove("selected"));
        button.classList.add("selected");
        updateResults();
      });
      row.appendChild(button);
    });

    section.appendChild(row);
    controls.appendChild(section);
  });

  updateResults();
}

function reset() {
  Object.keys(state).forEach(key => state[key] = null);
  document.querySelectorAll(".choice.selected").forEach(button => button.classList.remove("selected"));
  updateResults();
}
document.getElementById("copyBtn").addEventListener("click", async () => {
  const anatomic = document.getElementById("anatomicResult").textContent;
  const prognostic = document.getElementById("prognosticResult").textContent;

  const label =
  stagingMode === "clinical"
    ? "Clinical Prognostic Stage"
    : "Pathological Prognostic Stage";

const textToCopy =
`Anatomic Stage: ${anatomic}
${label}: ${prognostic}`;

  try {
    await navigator.clipboard.writeText(textToCopy);
    document.getElementById("copyBtn").textContent = "Copied!";
    setTimeout(() => {
      document.getElementById("copyBtn").textContent = "Copy Result";
    }, 1500);
  } catch {
    alert(textToCopy);
  }
});
document.getElementById("resetBtn").addEventListener("click", reset);
document.getElementById("debugToggle").addEventListener("change", event => {
  document.getElementById("debugBox").hidden = !event.target.checked;
});

document.getElementById("clinicalMode").addEventListener("click", () => {

  stagingMode = "clinical";

  document
    .getElementById("clinicalMode")
    .classList.add("selected");

  document
    .getElementById("pathologicMode")
    .classList.remove("selected");

  document.getElementById("modeDescription").textContent =
    "Use clinical exam, imaging, biopsy, and pre-treatment receptor/grade data.";

  state.Oncotype = null;
  renderControls();  
  updateResults();
});

document.getElementById("pathologicMode").addEventListener("click", () => {

  stagingMode = "pathologic";

  document
    .getElementById("pathologicMode")
    .classList.add("selected");

  document
    .getElementById("clinicalMode")
    .classList.remove("selected");

  document.getElementById("modeDescription").textContent =
    "Use final surgical pathology values when available.";

  renderControls();
  updateResults();
});

renderControls();
