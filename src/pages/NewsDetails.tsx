import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, MapPin, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { newsData } from "@/data/NewsData"; // Import the news data

const NewsDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const newsId = parseInt(id || '0');
  const article = newsData[newsId as keyof typeof newsData];

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Article no trobat</h1>
          <Link to="/">
            <Button>Tornar a les notícies</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/">
              <Button variant="ghost" className="hover:bg-gray-100">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Tornar a notícies
              </Button>
            </Link>
            <Button variant="outline" className="flex items-center gap-2">
              <Share2 className="h-4 w-4" />
              Compartir
            </Button>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <article className="bg-white rounded-lg shadow-sm overflow-hidden">
            {/* Hero Image */}
            <div className="relative h-96">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-white bg-opacity-90 px-3 py-1 rounded-full text-sm font-medium text-gray-800">
                  {article.category}
                </span>
              </div>
            </div>

            {/* Article Header */}
            <div className="p-8">
              <div className="mb-6">
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {article.date}
                  </span>
                  {article.location && (
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {article.location}
                    </span>
                  )}
                </div>
                <h1 className="text-3xl font-bold text-gray-900 leading-tight mb-4">
                  {article.title}
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {article.excerpt}
                </p>
              </div>

              {/* Article Body */}
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              {/* Article Footer */}
              <div className="border-t border-gray-200 mt-8 pt-6">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">Autor:</span> {article.author}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Anterior
                    </Button>
                    <Button variant="outline" size="sm">
                      Següent
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Related News */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Notícies relacionades</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Workshop sobre Intel·ligència Artificial
                </h3>
                <p className="text-sm text-gray-600">
                  Aprofundeix en les últimes tendències en IA amb experts del sector...
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Nou conveni amb empreses tecnològiques
                </h3>
                <p className="text-sm text-gray-600">
                  L'EPS amplia les seves col·laboracions empresarials per oferir més oportunitats...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;