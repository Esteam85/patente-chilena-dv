Feature: Generate Ppu DV
  As a Car Owner with a Ppu
  I want to generate the DV of my Ppu
  So that I can have mi Ppu with respective DV

  Scenario Outline: Generate Dv
    Given a valid <ppu>
    When generate the DV
    Then should have the respective <dv> - DV
    Then should have the respective <format> - Format

  Examples:
    | ppu    | format  | dv |
    | BBBB01 | LLLL.NN | 9  |
    | BBBC01 | LLLL.NN | 5  |
    | BBBR01 | LLLL.NN | 5  |
    | BBBZ01 | LLLL.NN | K  |
    | BBCB01 | LLLL.NN | 4  |
    | ZZZZ99 | LLLL.NN | K  |
    | HWJP59 | LLLL.NN | 8  |
    | JVGX15 | LLLL.NN | 9  |
    | BBB010 | LLL.NNN | 1  |
    | BBC099 | LLL.NNN | 9  |
    | BBR010 | LLL.NNN | 7  |
    | BBZ050 | LLL.NNN | 4  |
    | BCB099 | LLL.NNN | 8  |
    | ZZZ099 | LLL.NNN | 2  |
    | GRG011 | LLL.NNN | 0  |
    | YRB011 | LLL.NNN | K  |
    | VF5302 | LL.NNNN | 7  |
    | AA1112 | LL.NNNN | 0  |
    | EA1123 | LL.NNNN | K  |
    | WT0676 | LL.NNNN | 9  |
