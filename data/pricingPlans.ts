export const pricingPlans = [
  {
    id: "normal",
    title: "ノーマル英文校正",
    header: {
      reviewers: "2 名体制",
      iconPath: "/icons/normal.png",
    },
    description:
      "原稿の文章が「英語として正しいか」を重点的にチェックし添削する英文校正サービスです。徹底的な文法チェックに加え、専門用語の用法・スペルも精査し、正確で読みやすい論文英語に仕上げます。",
    price: 5.5,
    moreDetails: {
      label: "ノーマル英文校正の詳細へ",
      link: "/",
    },
    benefits: [
      "10%単語削減",
      "原稿評価カルテ（詳細版1ページ）",
      "投稿規程チェック",
      "英文校正証明書",
    ],
    services: [
      {
        name: "ライティングアドバイス",
        cost: "無料",
        validity: "1年間",
      },
      {
        name: "査読対応オプション",
        cost: "無料",
        validity: "1年間",
      },
      {
        name: "あんしん保証（無制限再校正）",
        cost: "無料",
        validity: "1年間",
      },
      {
        name: "担当校正者Q&A",
        cost: "無料",
        validity: "1年間",
      },
    ],
  },
  {
    id: "advanced",
    title: "アドバンス英文校正",
    header: {
      badge: "おすすめ",
      reviewers: "2 名体制",
      iconPath: "/icons/advanced.png",
    },
    description:
      "英語の文法チェックに加え、論旨の展開や内容の妥当性にまで踏み込んで文章を分析し、より説得力のある英文を提案する校正サービスです。論文としての構成もチェックして、英語原稿全体の質を高めます。",
    price: 10,
    moreDetails: {
      label: "ノーマル英文校正の詳細へ",
      link: "/",
    },
    benefits: [
      "20%単語削減",
      "原稿評価カルテ（詳細版4ページ）",
      "投稿規程チェック",
      "英文校正証明書",
      "英文カバーレター",
    ],
    services: [
      {
        name: "査読対応オプション",
        cost: "無料",
        validity: "1年間",
        highlight: "再校正対象のご修正量に上限なし！",
      },
      {
        name: "あんしん保証（無制限再校正）",
        cost: "無料",
        validity: "1年間",
      },
      {
        name: "担当校正者Q&A",
        cost: "無料",
        validity: "1年間",
      },
    ],
  },
  {
    id: "top-impact",
    title: "トップインパクト英文校正",
    description:
      "英語論文の言語や構造のチェックに加え、学術的内容も精査し、インパクトファクターの高いトップジャーナルへの研究論文掲載をサポート。ジャーナル投稿前の論文改善につながる事前査読が無料で含まれます。",
    header: {
      badge: "模擬査読付き",
      reviewers: "3 名体制",
      iconPath: "/icons/top-impact.png",
    },
    moreDetails: {
      label: "ノーマル英文校正の詳細へ",
      link: "/",
    },
    discount: {
      label: "新規お客様はさらに15%割引",
      percentage: 15,
    },
    price: 27,
    benefits: [
      "20%単語削減",
      "トップインパクトレポート（事前査読レポート）",
      "原稿評価カルテ（論文診断レポートで評価）",
      "投稿規程チェック",
      "英文校正証明書",
      "英文カバーレター",
      "盗用・剽窃チェック",
    ],
    services: [
      {
        name: "ライティングアドバイス",
        cost: "無料",
        validity: "1年間",
      },
      {
        name: "査読対応オプション",
        cost: "",
        validity: "1年間",
        highlight: "再校正対象のご修正量に上限なし！",
      },
      {
        name: "あんしん保証（無制限再校正）",
        cost: "無料",
        validity: "1年間",
      },
      {
        name: "担当校正者Q&A",
        cost: "無料",
        validity: "1年間",
      },
    ],
  },
];
